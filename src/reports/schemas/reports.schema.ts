import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
  title: String,
  data: String,
  authorId: String,
});
