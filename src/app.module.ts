import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsController } from './authors/authors.controller';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/AuthorReportsDB'),
    AuthorsModule,
    ReportsModule,
  ],
  controllers: [AppController, AuthorsController],
  providers: [AppService],
})
export class AppModule {}
