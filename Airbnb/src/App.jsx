import { useState } from 'react'
import './App.css'
import Navigation from './Header'
import Content1 from './Content1'
import Content2 from './Content2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <Content1 />
    <Content2 />
    </>
  )
}

export default App
