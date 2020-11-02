import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// import {Author} from './author.model'

@Injectable()
export class AuthorsService {
  async getBooks() {
    // const books = await this.bookModel.find().exec();
    // return books.map(book => ({
    //   id: book.id,
    //   title: book.title,
    //   description: book.description,
    //   price: book.price,
    // }));
  }
}
