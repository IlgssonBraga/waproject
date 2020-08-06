import { IUser } from './user';

export interface IOrder {
  id?: number;
  user_id?: number;
  amount: number;
  description: string;
  price: number;
  createdDate?: Date;
  updatedDate?: Date;

  user?: IUser;
}
