import React, { useEffect, useState } from 'react'
import BankAccountInfo from '../components/BankAccountInfo'
import axios from 'axios';
import BankAccountsContainer from '../components/BankAccountsContainer';

export interface AccountData{
    account_number:string,
    current_balance:string,
}

const Accounts = () => {
    const api_uri = "http://localhost:8000/api/accounts"
    const [data, setData] = useState<[AccountData]|null>();

    const getData = () => {
        axios(api_uri+"/user/6")
        .then(response =>{
            setData(response.data)
        })
        .catch(error =>console.log(error))
    }

    useEffect(() => {
        getData();
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