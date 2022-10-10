import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../store/entities/auth'

const Login = () => {

    const dispatch = useDispatch()

    const [loginData, setData] = useState({
        email: "",
        password: ""
    })

    const getInfo = (event) => {
        setData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    const submitLogin = () => {
        dispatch(loginAction(loginData))
    }

    return (
        <div>
            <input onChange={getInfo} name='email' type='text'/>
            <input onChange={getInfo} name='password' type='text'/>
            <button onClick={submitLogin}>submit</button>
        </div>
    )
}

export default Login