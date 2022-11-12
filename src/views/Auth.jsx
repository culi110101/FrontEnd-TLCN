import React from 'react'
import Login from '../components/auth/Login'

const Auth = ({authRoute}) => {
    let body = (
        <div>
            {authRoute === 'login' && <Login />}
        </div>
    )
    return (
        <div className='bg-info auth-view'>
            {body}
        </div>
    )
}

export default Auth