import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from './interfaces/reports.interface';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel('Report') private readonly reportModel: Model<Report>,
  ) {}

  async findAll(): Promise<Report[]> {
    return await this.reportModel.find();
  }

  async findById(id: string): Promise<Report> {
    return await this.reportModel.findOne({ _id: id });
  }

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const createReport = new this.reportModel(createReportDto);
    return createReport.save();
  }

  async update(id: string, report: Partial<Report>): Promise<Report> {
    return await this.reportModel.findOneAndUpdate(
      { _id: id },
      {
        title: report.title,
        data: report.data,
        authorId: report.authorId,
      },
    );
  }

  async delete(id: string): Promise<Report> {
    return await this.reportModel.findOneAndDelete({ _id: id });
  }
}
