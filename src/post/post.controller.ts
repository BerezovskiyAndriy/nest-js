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
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/post-update.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: 'get all posts' })
  @ApiOkResponse({
    status: 200,
    description: 'get array of posts',
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @ApiOperation({ summary: 'create post' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        title: 'namePost',
        description: 'descriptionPost',
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }

  @ApiOperation({ summary: 'get one post' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        title: 'namePost',
        description: 'descriptionPost',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @ApiOperation({ summary: 'update post' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        description: 'descriptionPost',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() postDto: UpdatePostDto) {
    return this.postService.updatePost(id, postDto);
  }

  @ApiOperation({ summary: 'delete post' })
  @HttpCode(HttpStatus.BAD_REQUEST)
  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    this.postService.deletedPost(id);
  }
}
