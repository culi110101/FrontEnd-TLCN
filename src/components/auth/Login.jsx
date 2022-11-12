import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../store/entities/auth'
import {Form, FloatingLabel, Button, Image} from 'react-bootstrap'
import loginImage from '../../assets/login.jpg'

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
        <div className='login-form w-50 d-flex'>
            <div className='w-50'>
                <Image className='w-100 h-100' src={loginImage}/>
            </div>
            &#160;&#160;&#160;&#160;&#160;&#160;
            <div className='w-50 p-3'>
                <h2 className='mb-5'>Login Account</h2>
                <hr />
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                    >
                    <Form.Control name="email" onChange = {getInfo} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control name="password" onChange = {getInfo} type="password" placeholder="Password" />
                </FloatingLabel>
                <div className='text-center'>
                    <Button onClick={submitLogin} className='mt-4' variant="primary">Sign in</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default Login