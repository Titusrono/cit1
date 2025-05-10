import { Test, TestingModule } from '@nestjs/testing';
import { ResetpassService } from './resetpass.service';

describe('ResetpassService', () => {
  let service: ResetpassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResetpassService],
    }).compile();

    service = module.get<ResetpassService>(ResetpassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
