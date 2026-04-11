import React, {useContext} from 'react'
//import usercontext to use here
import { UserContext } from '../App.jsx'

function ChildC() {
    const user = useContext(UserContext)
  return (
    <div>
        {user?.name}
    </div>
  )
}

export default ChildC
