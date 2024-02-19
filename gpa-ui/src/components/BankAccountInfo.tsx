// BankAccountInfo.tsx
import React from 'react';
import { Card, CardContent, Link, Typography } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

interface BankAccountInfoProps {
  accountId: number
  accountNumber: string;
  currentBalance: string;
}

const formatAccountNumber = (accountNumber:string): string =>{
  return accountNumber.match(/.{1,4}/g)?.join(" ") || "";
}

const BankAccountInfo: React.FC<BankAccountInfoProps> = ({ accountNumber, currentBalance, accountId }) => {
  const formattedAccountNumber = formatAccountNumber(accountNumber);
  return (
    <Card variant="outlined" style={{ minWidth: '200px', margin: '10px', textAlign: 'left' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Account Number
        </Typography>
        <Typography variant="body1">{formattedAccountNumber}</Typography>
        <Typography variant="body1" style={{marginTop: '10px'}}>Current Balance: ${currentBalance}</Typography>
        <Link component={RouterLink} to={`/transactions/${accountId}`}>
          View Transactions
        </Link>
      </CardContent>
    </Card>
  );
};

export default BankAccountInfo;
