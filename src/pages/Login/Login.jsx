import "./Login.scss";
import React, { useState } from 'react';
import LoginAPI from './LoginAPI';

function Login(props) {
    const [APIDetailsLogin, setAPIDetailsLogin] = useState({
        user: '',
        email: '',
        pass: '',
      })
    const [loginDetails, setLoginDetails] = useState({
        user: '',
        email: '',
        pass: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setLoginDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }

    function handleSubmit() {
        setAPIDetailsLogin({ ...loginDetails }) //check i need the ...here
    }
    //console.log(loginDetails)
    console.log(APIDetailsLogin)
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h2>Login</h2>
                    <p>{props.serverMessage}</p>
                    <div className="login">
                        <input type="text" placeholder="Email" name="email" value={loginDetails.email} onChange={handleChange} />
                        <input type="password" placeholder="Password" name="pass" value={loginDetails.pass} onChange={handleChange} />
                        <input type="submit" value="Go" onClick={handleSubmit} />
                    </div>
                </header>
            </div>
            <LoginAPI APIDetailsLogin={APIDetailsLogin} setUsername={props.setUsername} setIsLoggedIn={props.setIsLoggedIn} setServerMessage={props.setServerMessage} />
        </>
    )
}

export default Login;