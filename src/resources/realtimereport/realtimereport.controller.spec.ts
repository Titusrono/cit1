import { Test, TestingModule } from '@nestjs/testing';
import { RealtimereportController } from './realtimereport.controller';
import { RealtimereportService } from './realtimereport.service';

describe('RealtimereportController', () => {
  let controller: RealtimereportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealtimereportController],
      providers: [RealtimereportService],
    }).compile();

    controller = module.get<RealtimereportController>(RealtimereportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
