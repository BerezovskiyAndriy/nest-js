import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  getOneById(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: Number(userId) },
    });
  }

  getUserByEmail(userEmail: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { email: userEmail },
    });
  }

  createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  updateUserById(
    userId: string,
    userData: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.prismaService.user.update({
      where: { id: Number(userId) },
      data: { name: userData.name, city: userData.city, age: userData.age },
    });
  }

  deletedUser(userId: string) {
    return this.prismaService.user.deleteMany({
      where: {
        id: Number(userId),
      },
    });
  }
}
