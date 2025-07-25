import React, {useState,useContext, use} from 'react'
import UserContext from '../context/UserContext'




function Login() {
    const {setUser} =useContext(UserContext)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
    
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='Username' 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
}

export default Login
