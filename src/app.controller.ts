import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { User } from './users/user.entity';
import { RoleGuard } from './auth/role.guard';
import { CONSTANTS } from './auth/constants';

@Controller("app")
export class AppController {
constructor(private readonly authService : AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  getHello(@Request() res): any {
    // authentication part
    // generate token
    // const token = this.authService.generateToken(res.user);
    return {
      login: "success",
      token: this.authService.generateToken(res.user)
    }
  }

  @Get('user')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.USER))
  getUser(@Request() res): User {
    return res.user;
  }

  @Get('admin')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ADMIN))
  getAdmin(@Request() res): User {
    return res.user;
  }
}
