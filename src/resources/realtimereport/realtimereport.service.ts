import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RealTimeReport, RealTimeReportDocument } from './entities/realtimereport.entity';
import { CreateRealTimeReportDto } from './dto/create-realtimereport.dto';
import { UpdateRealTimeReportDto } from './dto/update-realtimereport.dto';

@Injectable()
export class RealTimeReportService {
  constructor(
    @InjectModel(RealTimeReport.name)
    private reportModel: Model<RealTimeReportDocument>,
  ) {}

  async create(createDto: CreateRealTimeReportDto): Promise<RealTimeReport> {
    const created = new this.reportModel(createDto);
    return created.save();
  }

  async findAll(): Promise<RealTimeReport[]> {
    return this.reportModel.find().exec();
  }

  async findByStatus(status: string): Promise<RealTimeReport[]> {
    return this.reportModel.find({ status }).exec();
  }

  async findOne(id: string): Promise<RealTimeReport> {
    const report = await this.reportModel.findById(id).exec();
    if (!report) throw new NotFoundException('Report not found');
    return report;
  }

  async update(id: string, updateDto: UpdateRealTimeReportDto): Promise<RealTimeReport> {
    const updated = await this.reportModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!updated) throw new NotFoundException('Report not found');
    return updated;
  }

  async remove(id: string): Promise<void> {
    const res = await this.reportModel.findByIdAndDelete(id).exec();
    if (!res) throw new NotFoundException('Report not found');
  }
}
