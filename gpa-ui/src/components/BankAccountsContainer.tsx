// BankAccountsContainer.tsx
import React from 'react';
import { Box } from '@mui/material';
import BankAccountInfo from './BankAccountInfo';
import { AccountData } from '../pages/Accounts';

interface BankAccountsContainerProps {
  accounts: AccountData[];
}

const BankAccountsContainer: React.FC<BankAccountsContainerProps> = ({ accounts }) => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
      {accounts.map((account, index) => (
        <BankAccountInfo
          key={index}
          accountNumber={account.account_number}
          currentBalance={account.current_balance}
          accountId={account.ID}
        />
      ))}
    </Box>
  );
};

export default BankAccountsContainer;
