import { Module } from '@nestjs/common';
import { PetitionsService } from './petitions.service';
import { PetitionsController } from './petitions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Petition, PetitionSchema } from './entities/petition.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Petition.name, schema: PetitionSchema }])],
  controllers: [PetitionsController],
  providers: [PetitionsService],
})
export class PetitionsModule {}
