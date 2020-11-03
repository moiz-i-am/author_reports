import { Document } from 'mongoose';

export interface Author extends Document {
  id?: string;
  name: string;
}

// export const AuthorModel = mongoose.model<Author>('Author', Authors);
