import { useState } from 'react'
import './App.css'
import Navigation from './Header'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import im1 from './assets/grids/1.png'
import im2 from './assets/grids/2.png'
import im3 from './assets/grids/3.png'

const shop = [{
  img: im1, 
  price :136, 
  title: "Life lessons with Katie Zaferes", 
  number: 6,
  country:'USA', 
  rate:'5.0',
  decision: 0
},
{
  img: im2,
  price: 125, 
  title: "Learn wedding photography",
  number: 30,
  country: 'USA', 
  rate: '5.0',
  decision: 1 
},
{
  img: im3, 
  price: 50, 
  title: "Group Mountain Biking",
  rate: '4.8',
  number: 2, 
  country: 'USA',
  decision: 0
}
]

function App() {
  const [count, setCount] = useState(0)
  const data = shop.map((items)=>{
    let decide 
    if(items.decision === 1) {
      decide = "Online"
    }
    else{
      decide = "Sold"
    }

    return <Content3 {...items} decision={decide}/>
  })
  return (
    <div className='w-3/6 mx-auto rounded-sm shadow-lg'>
    <Navigation />
    <Content1 />
    <Content2 />
    <div className='flex'>
        {data}
    </div>
    
    </div>
  )
}

export default App
