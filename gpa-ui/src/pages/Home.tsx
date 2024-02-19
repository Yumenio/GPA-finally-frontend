import React from 'react'
import { useNavigate } from 'react-router-dom'
import Accounts from './Accounts';

const Home = ({token}:{token:string|null}) => {
    const navigate = useNavigate();
    if(!token){
        return (
            <div>
            <h1>Welcome to GPA!</h1>
        </div>
    )
    }
    return <Accounts token={token}/>
}

export default Home