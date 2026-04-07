import { useState } from 'react'
import Card, {handleClick} from './components/Card.jsx'


function App() {
  return (
    <>
      <Card name="Yash" role="frontend dev" onClick={handleClick}/>
      <Card name="Suraj" role="backend dev" onClick={handleClick}/>
      
    </>
  )
}

export default App
