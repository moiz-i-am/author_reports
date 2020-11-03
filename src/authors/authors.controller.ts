import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
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
    const authorIndividual = this.authorService.findById(id);

    return authorIndividual;
  }

  @Post()
  async createAuthor(
    @Body() createAuthorDto: CreateAuthorDto,
  ): Promise<Author> {
    const authorCreation = this.authorService.create(createAuthorDto);

    return authorCreation;
  }

  @Put(':id')
  update(
    @Body() updateAuthorDto: CreateAuthorDto,
    @Param('id') id,
  ): Promise<Author> {
    const authorModify = this.authorService.update(id, updateAuthorDto);

    return authorModify;
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Author> {
    const authorRemove = this.authorService.delete(id);

    return authorRemove;
  }
}
