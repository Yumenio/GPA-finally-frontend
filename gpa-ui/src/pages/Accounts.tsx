import React, { useEffect, useState } from 'react'
import BankAccountInfo from '../components/BankAccountInfo'
import axios from 'axios';
import BankAccountsContainer from '../components/BankAccountsContainer';
import { jwtDecode } from 'jwt-decode';

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

    const secretKey = "django-insecure-l7jl&oths=+ytf+8nh4^5ko1bz&*f^)h1z%o8q@dx4d(0a*pwg"

    const getData = (userId:string) => {
        axios(api_uri+"/user/"+userId)
        .then(response =>{
            setData(response.data)
        })
        .catch(error =>console.error(error))
    }

    useEffect(() => {
        if(token == null){
            return;
        }
        const decoded:UserJwtPayload = jwtDecode(token);
        getData(decoded.user_id);
    }, [])
  return (
    <div>
        <h1>Accounts</h1>
        <ul>

            {
                data?
                <BankAccountsContainer accounts={data}/>
                :
                ""
            }
        </ul>
    </div>
  )
}

export default Accounts