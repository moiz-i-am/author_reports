import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './interfaces/author.interface';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorsService) {}

  @Get()
  async getAllAuthors(): Promise<Author[]> {
    const authors = this.authorService.findAll();
    return authors;
  }

  @Post()
  async createAuthor(
    @Body() createAuthorDto: CreateAuthorDto,
  ): Promise<Author> {
    return this.authorService.create(createAuthorDto);
  }
}
