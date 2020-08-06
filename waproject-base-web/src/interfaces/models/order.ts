import IUser from './user';

export default interface IOrder {
  id?: number;
  user_id?: number;
  user?: IUser;
  amount: number;
  price: number;
  description: string;
  createdDate?: Date;
  updatedDate?: Date;
}
