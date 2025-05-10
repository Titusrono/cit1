import { Test, TestingModule } from '@nestjs/testing';
import { RealtimereportService } from './realtimereport.service';

describe('RealtimereportService', () => {
  let service: RealtimereportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealtimereportService],
    }).compile();

    service = module.get<RealtimereportService>(RealtimereportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
