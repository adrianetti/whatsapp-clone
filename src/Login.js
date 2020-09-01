import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'

function Login() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => console.log(result))
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <h1>Welcome to the best wp-clon in the world</h1>

            <Button onClick={signIn}>sign in with google</Button>
        </div>
    )
}

export default Login
