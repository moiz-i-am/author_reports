import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsController } from './authors.controller';
import { AuthorsReportController } from './author-report.controller';
import { AuthorsService } from './authors.service';
import { AuthorReportService } from './author-report.service';
import { AuthorSchema } from './schemas/authors.schema';
import { ReportSchema } from 'src/reports/schemas/reports.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Author', schema: AuthorSchema },
      { name: 'Report', schema: ReportSchema },
    ]),
  ],
  controllers: [AuthorsController, AuthorsReportController],
  providers: [AuthorsService, AuthorReportService],
  exports: [AuthorsService, AuthorReportService],
})
export class AuthorsModule {}
