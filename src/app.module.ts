import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetitionsModule } from './petitions/petitions.module';
import { PetitionsModule } from './resources/petitions/petitions.module';

@Module({
  imports: [PetitionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
