import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to='/' className='link'>
    <header className='header'>
        <h1>movieHunter</h1>
    </header>
    </Link>
  )
}

export default Header