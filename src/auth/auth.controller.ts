import { Controller, Get, Body, Post, ValidationPipe, UseGuards, Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { LocalAuthGuard } from './guards/local-auth.guard'
import { JwtAuthGuard } from './guards/jwt-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    const signupCaller = await this.authService.signUp(authCredentialsDto);

    return signupCaller;
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Request() req) {
    const signInCaller = this.authService.signIn(req.user);

    return signInCaller
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }


}
