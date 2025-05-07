import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PetitionsModule } from './petitions/petitions.module';
import { PetitionsModule } from './resources/petitions/petitions.module';
import { AuthModule } from './resources/auth/auth.module';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [PetitionsModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
