import { Injectable } from '@nestjs/common';
import { IPaginationParams } from 'modules/common/interfaces/pagination';
import { Order } from 'modules/database/models/order';
import { Page, Transaction } from 'objection';
import { IOrder } from 'modules/database/interfaces/order';

@Injectable()
export class OrdersRepository {
  public async list(params: IPaginationParams, transaction?: Transaction): Promise<Page<Order>> {
    let query = Order.query(transaction)
      .withGraphFetched({
        user: true
      })
      .select('*')
      .page(params.page, params.pageSize);

    if (params.orderBy) {
      query = query.orderBy(params.orderBy, params.orderDirection);
    }

    if (params.term) {
      query = query.where(query => {
        return query.where('description', 'ilike', `%${params.term}%`);
      });
    }

    return query;
  }

  public async insert(model: IOrder, transaction?: Transaction): Promise<any> {
    return Order.query(transaction).insert(model as any);
  }
}
