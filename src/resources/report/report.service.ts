import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from './entities/report.entity';  // Ensure you've created a report entity

@Injectable()
export class ReportService {
  constructor(
    @InjectModel(Report.name) private readonly reportModel: Model<Report>,
  ) {}

  // Create a new report (with file upload handling)
  async create(createReportDto: CreateReportDto, fileNames: string[]) {
    const newReport = new this.reportModel({
      ...createReportDto,
      images: fileNames,
    });
    await newReport.save();
    return newReport;
  }

  // Get all reports
  async findAll() {
    return this.reportModel.find().exec();
  }

  // Get a single report by ID
  async findOne(id: string) {
    return this.reportModel.findById(id).exec();
  }

  // Update a report
  async update(id: string, updateReportDto: UpdateReportDto) {
    return this.reportModel.findByIdAndUpdate(id, updateReportDto, { new: true }).exec();
  }

  // Delete a report
  async remove(id: string) {
    return this.reportModel.findByIdAndDelete(id).exec();
  }}
