import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
    ) {}

//   async validateUser(username: string, pass: string): Promise<any> {
//     const user = await this.userService.getUserByUsername(username);
//     if (user && user.password === pass) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }

generateToken (payload : User) : string {
    // const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }
}