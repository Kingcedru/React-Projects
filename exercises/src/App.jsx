import { useState } from 'react'
import './App.css'
import Jokes from './jokes.jsx'

const students = [
  {
    name: "King",
    age: 20
  },
  {
    name: "Cedru",
    age: 19
  }
]
function App(){
  const student = students.map((elt)=>{
    return <Jokes name={elt.name} age={elt.age}/>;
  })
    return(
      <>
       {student}
      </>
    )
}
export default App
