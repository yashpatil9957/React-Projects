import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  // let counter = 5;

  let [counter, setCounter] = useState(15) //'counter' is variable (name can be anything) and 'setcounter' is method used to increase the counter.

  const addValue = ()=>{
    if(counter < 20){
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)

      // setCounter(prevCounter => prevCounter+1)
      // setCounter(prevCounter => prevCounter+1)
      // setCounter(prevCounter => prevCounter+1)
      // setCounter(prevCounter => prevCounter+1)
      
    }
    
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter-1)
    }

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button> 
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
