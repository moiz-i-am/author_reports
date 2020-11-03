import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Report } from './interfaces/reports.interface';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportService: ReportsService) {}

  @Get()
  async findAllReports(): Promise<Report[]> {
    const reports = this.reportService.findAll();

    return reports;
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Report> {
    const reportIndividual = this.reportService.findById(id);

    return reportIndividual;
  }

  @Post()
  async createReport(
    @Body() createReportDto: CreateReportDto,
  ): Promise<Report> {
    const reportCreation = this.reportService.create(createReportDto);

    return reportCreation;
  }

  @Put(':id')
  update(
    @Body() updateAuthorDto: CreateReportDto,
    @Param('id') id,
  ): Promise<Report> {
    const reportModify = this.reportService.update(id, updateAuthorDto);

    return reportModify;
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Report> {
    const reportRemove = this.reportService.delete(id);

    return reportRemove;
  }
}
