import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate("/")
  }


  return (
    <div className='flex justify-between items-center sm:px-3 md:px-14  h-[80px] text-black bg-blue-100'>
        <h3 className='font-bold hover:cursor-pointer' onClick={handleClick}>Anazon Store</h3>
        <div>
            <Link to="/" className='mr-6' >Home</Link>
            <Link to="/favorites" >Favorites</Link>
        </div>
    </div>
  )
}

export default NavBar