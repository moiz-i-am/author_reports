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

  async update(id: string, reportData): Promise<Report> {
    // type of data param of update func ????????????????
    console.log('data is =====> ', reportData);
    return await this.reportModel.findOneAndUpdate(
      { _id: id },
      {
        title: reportData.title,
        data: reportData.data,
        authorId: reportData.authorId,
      },
    );
  }

  async delete(id: string): Promise<Report> {
    return await this.reportModel.findOneAndDelete({ _id: id });
  }
}
