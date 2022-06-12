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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
