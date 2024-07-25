import { Schema, Document } from 'mongoose';

export interface User extends Document {
  _id: string;
  username: string;
  password: string;
}

export const UserSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
