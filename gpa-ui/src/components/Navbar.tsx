import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({setToken, token}:{setToken:Dispatch<SetStateAction<string>>, token:string|null}) => {
  const navigate = useNavigate();

  const handleLogout = () =>{
    setToken('');
    navigate("/");
  }

  useEffect(() => {}, [token])

  return (
    <div className="w-full sticky top-0 bg-white shadow-md z-50 mb-4">
      <div className="h-20 flex flex-row items-center">
        <div className=" mx-8 md:mx-auto flex w-full md:w-40 justify-between">
          <Link to="/" style={{textDecoration: 'none', color: 'black', fontSize: '2.25rem', lineHeight: '2.25rem'}}>GPA</Link>
          <div className="rounded border border-gray-300">
            {!token || token == ''?(
              <Link to="/login" className="text-black text-2xl p-1.5">Log In</Link>
              ):(
                <button onClick={handleLogout} className="text-black text-2xl p-1.5">Log out</button>
            )}
          </div>
        </div>
      </div>
      <hr className="border-black"/>
    </div>
  )
}

export default Navbar