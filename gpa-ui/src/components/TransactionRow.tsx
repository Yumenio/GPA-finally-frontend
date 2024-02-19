import React from 'react';
import { TransactionData } from '../pages/Transactions';
import { TableCell, TableRow } from '@mui/material';


interface TransactionRowProps {
  transaction: TransactionData;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
    return (
      <TableRow>
        <TableCell>{transaction.ID}</TableCell>
        <TableCell>{transaction.date}</TableCell>
        <TableCell>{transaction.transaction_type}</TableCell>
        <TableCell>{transaction.note}</TableCell>
        <TableCell>${transaction.amount}</TableCell>
      </TableRow>
    );
  };
  
  export default TransactionRow;
