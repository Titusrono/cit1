import { Test, TestingModule } from '@nestjs/testing';
import { ResetpassController } from './resetpass.controller';
import { ResetpassService } from './resetpass.service';

describe('ResetpassController', () => {
  let controller: ResetpassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResetpassController],
      providers: [ResetpassService],
    }).compile();

    controller = module.get<ResetpassController>(ResetpassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
