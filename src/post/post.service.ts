import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  private posts = [];

  getAll() {
    return this.posts;
  }

  getPostById(id) {
    return this.posts.find((post) => post.id === id);
  }

  createPost(postDto: PostDto) {
    this.posts.push({
      ...postDto,
      id: new Date().valueOf(),
    });
    return postDto;
  }

  updatePost(id, postDto: PostDto) {
    this.posts.find((post) => {
      if (+post.id === +id) {
        post.id = id;
        post.title = postDto.title;
        post.description = postDto.description;
      }
    });
    return this.posts;
  }

  deletedPost(id) {
    return this.posts.filter((post) => post.id !== id);
  }
}
