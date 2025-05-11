// src/auth/register/register.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { User, UserSchema } from './entities/register.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }  // ✅ Register the User model
    ]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService], // optional, in case you use elsewhere
})
export class RegisterModule {}
