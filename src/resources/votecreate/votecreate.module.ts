import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotecreateService } from './votecreate.service';
import { VotecreateController } from './votecreate.controller';
import { VoteCreate, VoteCreateSchema } from './entities/votecreate.entity';

@Module({
  imports: [
    // Mongoose module setup for VoteCreate schema
    MongooseModule.forFeature([
      { name: VoteCreate.name, schema: VoteCreateSchema },
    ]),
  ],
  controllers: [VotecreateController], // Registering the controller
  providers: [VotecreateService], // Registering the service
})
export class VotecreateModule {}
