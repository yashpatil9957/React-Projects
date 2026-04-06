import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  //passing values in components
  let myObj = {
    username: "yashpatil-03",
    age: 20
  }

  let myArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind CSS</h1>
      <Card username={myObj.username} btnText='view' />
      <Card username="patil3103"/> 
    </>
  )
}

export default App
