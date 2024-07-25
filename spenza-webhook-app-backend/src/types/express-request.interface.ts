import { Request } from 'express';
import { User } from 'src/users/schemas/user.schema';

export interface AuthenticatedRequest extends Request {
  user: User;
}
