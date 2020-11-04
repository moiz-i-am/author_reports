import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsController } from './authors.controller';
import { AuthorsReportController } from './author-report.controller';
import { AuthorsService } from './authors.service';
import { AuthorSchema } from './schemas/authors.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
  controllers: [AuthorsController, AuthorsReportController],
  providers: [AuthorsService],
  exports: [AuthorsService],
})
export class AuthorsModule {}
