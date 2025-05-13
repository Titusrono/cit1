import { Test, TestingModule } from '@nestjs/testing';
import { VotecreateController } from './votecreate.controller';
import { VotecreateService } from './votecreate.service';

describe('VotecreateController', () => {
  let controller: VotecreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotecreateController],
      providers: [VotecreateService],
    }).compile();

    controller = module.get<VotecreateController>(VotecreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
