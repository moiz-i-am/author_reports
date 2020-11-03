import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './interfaces/author.interface';

// import {Author} from './author.model'

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  async findAll(): Promise<Author[]> {
    return await this.authorModel.find();
  }

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return await createdAuthor.save();
  }
}
