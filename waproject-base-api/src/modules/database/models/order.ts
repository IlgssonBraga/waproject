import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';
import { IOrder } from '../interfaces/order';
import { User } from './user';

export class Order extends Model implements IOrder {
  @ApiProperty({ type: 'number' })
  public id: number;
  @ApiProperty({ type: 'number' })
  public user_id: number;
  @ApiProperty({ type: 'number' })
  public amount: number;
  @ApiProperty({ type: 'number' })
  public price: number;
  @ApiProperty({ type: 'string' })
  public description: string;
  @ApiProperty({ type: 'date', format: 'date-time' })
  public createdDate: Date;
  @ApiProperty({ type: 'date', format: 'date-time' })
  public updatedDate: Date;

  public static get relationMappings(): any {
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        filter: (query: any) => query.select('id', 'firstName', 'lastName', 'email'),
        join: {
          from: 'User.id',
          to: 'Orders.user_id'
        }
      }
    };
  }

  public $beforeInsert(): void {
    this.createdDate = this.updatedDate = new Date();
  }

  public $beforeUpdate(): void {
    this.updatedDate = new Date();
  }

  public static get tableName(): string {
    return 'Orders';
  }
}
