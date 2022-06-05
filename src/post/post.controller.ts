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
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll(): Array<PostDto> {
    return this.postService.getAll();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: PostDto) {
    return this.postService.createPost(postDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() postDto: PostDto) {
    return this.postService.updatePost(id, postDto);
  }

  @HttpCode(HttpStatus.BAD_REQUEST)
  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    this.postService.deletedPost(id);
  }
}
