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

  @Get(':authorId/reports')
  async getAuthorReports(@Param('authorId') authorId): Promise<Report[]> {
    const reports = this.authorReportService.findAll(authorId);

    return reports;
  }

  @Get(':authorId/reports/:reportId')
  async getAuthorReport(
    @Param('authorId') authorId,
    @Param('reportId') reportId,
  ): Promise<Report> {
    const reportIndividual = this.authorReportService.findById(
      authorId,
      reportId,
    );

    return reportIndividual;
  }

  @Post(':authorId/reports')
  async saveAuthorReport(
    @Param('authorId') authorId,
    @Body() createReportDto: CreateReportDto,
  ): Promise<Report> {
    const reportCreation = this.authorReportService.createById(
      authorId,
      createReportDto,
    );

    return reportCreation;
  }
}
