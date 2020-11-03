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
    return await this.authorModel.find();
  }

  async findById(id: string): Promise<Author> {
    return await this.authorModel.findOne({ _id: id });
  }

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return await createdAuthor.save();
  }

  async update(id: string, data): Promise<Author> {
    // type of data param of update func ????????????????
    console.log('data is =====> ', data);
    return await this.authorModel.findOneAndUpdate(
      { _id: id },
      { name: data.name },
    );
  }

  async delete(id: string): Promise<Author> {
    return await this.authorModel.findOneAndDelete({ _id: id });
  }
}
