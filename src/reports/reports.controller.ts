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
    return this.reportService.findById(id);
  }

  @Post()
  async createReport(
    @Body() createReportDto: CreateReportDto,
  ): Promise<Report> {
    return this.reportService.create(createReportDto);
  }

  @Put(':id')
  update(
    @Body() updateAuthorDto: CreateReportDto,
    @Param('id') id,
  ): Promise<Report> {
    return this.reportService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Report> {
    return this.reportService.delete(id);
  }
}
