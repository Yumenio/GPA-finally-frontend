import React, { useEffect, useState } from 'react'
import BankAccountInfo from '../components/BankAccountInfo'
import axios from 'axios';
import BankAccountsContainer from '../components/BankAccountsContainer';

export interface AccountData{
    ID: number,
    account_number:string,
    current_balance:string,
}

const Accounts = () => {
    const api_uri = "http://localhost:8000/api/accounts"
    const [data, setData] = useState<[AccountData]|null>();

    const user_id = "6"

    const getData = () => {
        axios(api_uri+"/user/"+user_id)
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