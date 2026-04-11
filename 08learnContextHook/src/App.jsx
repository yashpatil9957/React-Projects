import { createContext } from 'react'
import ChildA from './components/ChildA'
import { useState } from 'react';
//step-1: create context
const UserContext = createContext();
//step-2: Wrap all the required consumer childs/components inside the provider!! 
//step-3: pass the value
//step-4: Go inside the consumer and consume the value

function App() {
  const [user, setUser] = useState({name:"Love"});

  return (
    <>
    <UserContext.Provider value={user}>
      <ChildA/>
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
