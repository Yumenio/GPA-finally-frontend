import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BankAccountsContainer from '../components/BankAccountsContainer';
import { jwtDecode } from 'jwt-decode';
import { Container } from '@mui/material';

export interface AccountData{
    ID: number,
    account_number:string,
    current_balance:string,
}

interface UserJwtPayload{
    user_id:string
}

const Accounts = ({token}:{token:string|null}) => {
    const api_uri = "http://localhost:8000/api/accounts"
    const [data, setData] = useState<[AccountData]|null>();

    const getData = (userId:string) => {
        axios(api_uri+"/user/"+userId, {
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        .then(response =>{
            setData(response.data)
        })
        .catch(error =>console.error(error))
    }

    useEffect(() => {
        if(token == null || token==""){
            return;
        }
        const decoded:UserJwtPayload = jwtDecode(token);
        getData(decoded.user_id);
    }, [])
    return (
        <Container>
            <h1>Your Accounts</h1>
            {
                data && (<BankAccountsContainer accounts={data}/>)
            }
        </Container>
    )
}

export default Accounts