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
}
