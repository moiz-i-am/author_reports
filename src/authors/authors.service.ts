import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './interfaces/author.interface';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  async findAll(): Promise<Author[]> {
    return this.authorModel.find();
  }

  async findById(id: string): Promise<Author | undefined> {
    return this.authorModel.findOne({ _id: id });
  }

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return createdAuthor.save();
  }

  async update(id: string, author: Partial<Author>): Promise<Author> {
    return this.authorModel.findOneAndUpdate(
      { _id: id },
      { name: author.name },
    );
  }

  async delete(id: string): Promise<Author> {
    return this.authorModel.findOneAndDelete({ _id: id });
  }
}
