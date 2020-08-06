import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  @ApiProperty({ required: true, type: 'number' })
  public amount: number;
  @ApiProperty({ required: true, type: 'number' })
  public price: number;

  @IsNotEmpty()
  @MaxLength(250)
  @ApiProperty({ required: true, type: 'string', maxLength: 250 })
  public description: string;
}
