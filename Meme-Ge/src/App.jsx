import { useState } from 'react'
import './App.css'
import Header from './header'
import Meme from './meme'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Meme />
    </>
  )
}

export default App
