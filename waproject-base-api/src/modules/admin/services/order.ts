import { Injectable } from '@nestjs/common';
import { Order } from 'modules/database/models/order';
import { OrdersRepository } from '../repositories/order';
import { IOrder } from 'modules/database/interfaces/order';
import { IUserCurrent } from 'modules/database/interfaces/userCurrent';

@Injectable()
export class OrderService {
  constructor(private ordersRepository: OrdersRepository) {}

  public async create(model: IOrder, user: IUserCurrent): Promise<Order> {
    const { price, description, amount } = model;
    const { id } = user;

    return this.ordersRepository.insert({ user_id: id, amount, price, description });
  }
}
