import { useState } from 'react'
import './App.css'
import Jokes from './jokes.jsx'
import meme1 from './assets/m1.png'
import meme2 from './assets/m2.png'
import meme3 from './assets/m3.jpeg'
import m1 from './assets/m1.png'

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

const images = [
  {
    image: m1,
    name: "HTML",
    age: 90
  },
  {
    image: meme2,
    name: "Thinking",
    age: 99
  },
  {
    image: meme3,
    name: "Basketball",
    age: 100
  }
]

function App(){
  const image = images.map((elt)=>{
    return <Jokes img={elt.image} name = {elt.name}/>;
  })

    return(
      <div className="flex ">
        {image}
      </div>
    )
}
export default App
