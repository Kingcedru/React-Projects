import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
    return (
        <header>
            <nav className='nav'>
                <img src={reactLogo} className='im' />
                <ul className="nav-items">
                      <li>Pricing</li>
                      <li>About</li>
                      <li>Contact</li>
                  </ul>
            </nav>
        </header>
    )
  }

  export default Header