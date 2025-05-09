import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetitionsModule } from './resources/petitions/petitions.module';
import { AuthModule } from './resources/auth/auth.module';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://titusrono:kipngeno@pro.5ant8.mongodb.net/citizen_connect_db?retryWrites=true&w=majority&appName=pro'

    ),
    PetitionsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
