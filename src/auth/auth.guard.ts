import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      const authHeaders = request.headers.authorization;
      const bearer = authHeaders.split(' ')[0];
      const token = authHeaders.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException('user is not authorization');
      }

      const user = this.jwtService.verify(token, {
        secret: `${process.env.SECRET_NAME}`,
      });
      request.user = user;
      return true;
    } catch (err) {
      throw new UnauthorizedException({ message: 'user is not authorization' });
    }
  }
}
