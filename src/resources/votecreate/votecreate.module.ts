import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotecreateService } from './votecreate.service';
import { VotecreateController } from './votecreate.controller';
import { VoteCreate, VoteCreateSchema } from './entities/votecreate.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VoteCreate.name, schema: VoteCreateSchema }
    ]),
  ],
  controllers: [VotecreateController],
  providers: [VotecreateService],
})
export class VotecreateModule {}
