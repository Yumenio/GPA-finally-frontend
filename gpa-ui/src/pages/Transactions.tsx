import React from 'react';
import { useParams } from 'react-router-dom';

const TransactionsPage: React.FC = () => {
  const { accountId } = useParams<{ accountId: string }>();

  return (
    <div>
      <h2>Transactions for Account {accountId}</h2>
    </div>
  );
};

export default TransactionsPage;
