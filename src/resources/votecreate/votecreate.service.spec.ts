import { Test, TestingModule } from '@nestjs/testing';
import { VotecreateService } from './votecreate.service';

describe('VotecreateService', () => {
  let service: VotecreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VotecreateService],
    }).compile();

    service = module.get<VotecreateService>(VotecreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
