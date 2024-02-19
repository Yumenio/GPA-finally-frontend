import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TransactionRow from '../components/TransactionRow';

export interface TransactionData{
    ID: number,
    date: string;
    transaction_type: string;
    note:string;
    amount:number;
}

const TransactionsPage: React.FC = () => {
  const { accountId } = useParams<{ accountId: string }>();
  const [data, setData] = useState<[TransactionData]|null>();
  const api_uri = "http://localhost:8000/api/transactions"

    const getData = () => {
        axios(api_uri+"/account/"+accountId)
        .then(response => setData(response.data))
        .catch(error => console.error(error))
    }
    useEffect(()=>{
        getData();
    }, [accountId]);

    return (
        <div>
          {data && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Note</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((transaction) => (
                    <TransactionRow key={transaction.ID} transaction={transaction} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      );
    };

export default TransactionsPage;
