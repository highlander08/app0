import { Document } from 'mongoose';
//essa clase é um documento do mongoose
export class Task extends Document {
  description: string;
  completed: boolean;
}
