import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthRequired, CurrentUser } from 'modules/common/guards/token';
import { enRoles } from 'modules/database/interfaces/user';
import { ListValidator } from '../validators/order/list';
import { SaveValidator } from '../validators/order/save';
import { OrdersRepository } from '../repositories/order';
import { OrderService } from '../services/order';
import { Order } from 'modules/database/models/order';
import { IUserCurrent } from 'modules/database/interfaces/userCurrent';

@ApiTags('Admin: Order')
@AuthRequired([enRoles.user])
@Controller('/order')
export class OrderController {
  constructor(private ordersRepository: OrdersRepository, private orderService: OrderService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Order] })
  public async list(@Query() model: ListValidator) {
    return this.ordersRepository.list(model);
  }

  @Post()
  @ApiResponse({ status: 200, type: Order })
  public async save(@Body() model: SaveValidator, @CurrentUser() userCurrent: IUserCurrent) {
    return this.orderService.create(model, userCurrent);
  }
}
