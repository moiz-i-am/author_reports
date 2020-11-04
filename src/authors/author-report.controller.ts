import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthorReportService } from './author-report.service';
import { Report } from './../reports/interfaces/reports.interface';
import { CreateReportDto } from './../reports/dto/create-report.dto';

@Controller('authors')
export class AuthorsReportController {
  constructor(private readonly authorReportService: AuthorReportService) {}

  @Get(':authorId/reports/:reportId')
  getMessage(@Param('authorId') authorId, @Param('reportId') reportId) {
    return {
      message: `In a real example, I would return the message with an id of ${authorId} ${reportId}`,
    };
  }
}
