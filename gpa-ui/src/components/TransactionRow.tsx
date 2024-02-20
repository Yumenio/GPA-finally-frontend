import React from 'react';
import { TransactionData } from '../pages/Transactions';
import { TableCell, TableRow } from '@mui/material';


interface TransactionRowProps {
  transaction: TransactionData;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
    const getBackgroundColor = () => {
        const bgColor = transaction.transaction_type === "CREDIT"? {backgroundColor: "#FFCCCC"}:{backgroundColor:"#CFFFCC"}
        return bgColor;
    }
    const fixedAmount = transaction.transaction_type === "CREDIT"? -transaction.amount : transaction.amount;
    const formattedAmount = parseFloat(fixedAmount.toString()).toFixed(2);
    return (
      <TableRow style={getBackgroundColor()}>
        <TableCell>{transaction.ID}</TableCell>
        <TableCell>{transaction.date}</TableCell>
        <TableCell>{transaction.transaction_type}</TableCell>
        <TableCell>{transaction.note}</TableCell>
        <TableCell>${transaction.amount}</TableCell>
      </TableRow>
    );
  };
  
  export default TransactionRow;
