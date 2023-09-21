import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header() {
  return (
      <header>
          <nav>
              <img src={reactLogo} width="40px" />
              
          </nav>
      </header>
  )
}

function Footer() {
  return (
      <footer>
          <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
  )
}

function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

export default Page
