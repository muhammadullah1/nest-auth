import { Module } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: "jwtConstants.secret",
    signOptions: { expiresIn: '60s' },
  })],
  controllers: [],
  providers: [ LocalStrategy, AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
