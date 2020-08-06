import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React, { memo } from 'react';
import IOrder from 'interfaces/models/order';

interface IProps {
  order: IOrder;
}

const ListItem = memo((props: IProps) => {
  const { order } = props;

  return (
    <TableRow>
      <TableCell>{order.user.firstName}</TableCell>
      <TableCell>{order.amount}</TableCell>
      <TableCell>{order.price}</TableCell>
      <TableCell>{order.description}</TableCell>
    </TableRow>
  );
});

export default ListItem;
