import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Report } from './../reports/interfaces/reports.interface';
import { CreateReportDto } from './../reports/dto/create-report.dto';

@Injectable()
export class AuthorReportService {
  constructor(
    @InjectModel('Report') private readonly authorReportModel: Model<Report>,
  ) {}

  async findAll(authorId: string): Promise<Report[]> {
    const findAllReports = this.authorReportModel.find({ authorId });

    return findAllReports;
  }

  async findById(authorId: string, reportId: string): Promise<Report> {
    const findReportById = this.authorReportModel.findOne({
      _id: reportId,
      authorId,
    });

    return findReportById;
  }

  async createById(authorId: string, report: Partial<Report>): Promise<Report> {
    const createReport = this.authorReportModel.create({
      title: report.title,
      data: report.data,
      authorId,
    });

    return createReport;
  }

  async deleteById(authorId: string, reportId: string): Promise<Report> {
    const findReportById = this.authorReportModel.findOneAndDelete({
      _id: reportId,
      authorId,
    });

    return findReportById;
  }
}
