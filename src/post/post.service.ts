import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<Post[]> {
    return this.prismaService.post.findMany();
  }

  getPostById(postId: string): Promise<Post> {
    return this.prismaService.post.findUnique({
      where: {
        id: Number(postId),
      },
    });
  }

  createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prismaService.post.create({ data });
  }

  updatePost(postId: string, postData: Prisma.PostUpdateInput): Promise<Post> {
    return this.prismaService.post.update({
      where: { id: Number(postId) },
      data: {
        title: postData.title,
        description: postData.description,
        avatar: postData.avatar,
      },
    });
  }

  deletedPost(postId: string) {
    return this.prismaService.post.delete({
      where: {
        id: Number(postId),
      },
    });
  }
}
