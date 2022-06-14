import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/post-update.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFilter } from '../utils/image.filter';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: 'get all posts' })
  @ApiResponse({ status: 200, type: CreatePostDto })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @ApiOperation({ summary: 'create post' })
  @ApiResponse({ status: 200, type: CreatePostDto })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }

  @ApiOperation({ summary: 'get one post' })
  @ApiResponse({ status: 200, type: CreatePostDto })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @ApiOperation({ summary: 'update post' })
  @ApiResponse({ status: 200, type: UpdatePostDto })
  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: './avatar',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');

          return cb(null, `${randomName}${file.originalname}`);
        },
      }),
      fileFilter: imageFilter,
    }),
  )
  updatePost(
    @Body() postData: UpdatePostDto,
    @Param('id') id: string,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    let newAvatarPath: string = null;
    try {
      if (avatar) {
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');

        newAvatarPath = `avatar/${randomName}${avatar.originalname}`;
      }

      postData.avatar = newAvatarPath;

      return this.postService.updatePost(id, postData);
    } catch (e) {
      console.log(e);
    }
  }

  @ApiOperation({ summary: 'delete post' })
  @HttpCode(HttpStatus.BAD_REQUEST)
  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    this.postService.deletedPost(id);
  }
}
