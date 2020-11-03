import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  HttpStatus,
  Put,
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

  @Get(':id')
  async findOne(@Param('id') id): Promise<Author> {
    return this.authorService.findById(id);
  }

  @Post()
  async createAuthor(
    @Body() createAuthorDto: CreateAuthorDto,
  ): Promise<Author> {
    return this.authorService.create(createAuthorDto);
  }

  @Put(':id')
  update(
    @Body() updateAuthorDto: CreateAuthorDto,
    @Param('id') id,
  ): Promise<Author> {
    return this.authorService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Author> {
    return this.authorService.delete(id);
  }
}
