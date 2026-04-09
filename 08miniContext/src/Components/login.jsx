import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        
    }

    return (
        
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='usernname'/>
            <input type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default login