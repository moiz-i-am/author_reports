import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Report } from './../reports/interfaces/reports.interface';
import { CreateReportDto } from './../reports/dto/create-report.dto';

@Injectable()
export class AuthorReportService {
  constructor(
    @InjectModel('Reports') private readonly authorReportModel: Model<Report>,
  ) {}
}
