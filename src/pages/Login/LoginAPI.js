// send username, email, password to serverside

import React, {useState, useEffect} from 'react';

const LoginAPI = (props) => {

    const [urlToLogIn, setUrlToLogin] = useState('')

    useEffect(()=>{
        if(props.APIDetailsLogin.email.length > 0){
            
            let formData = new FormData();
            //formData.append('user', props.APIDetailsLogin.user)
            formData.append('email', props.APIDetailsLogin.email)
            formData.append('password', props.APIDetailsLogin.pass) //pass/password?

            const url = 'https://www.3tonemusic.com/?rest_route=/simple-jwt-login/v1/auth' // http://178.62.64.31 http://localhost:8888/?rest_route=/simple-jwt-login/v1/auth
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then((response) => response.json())
            .then((data) => {
                if (data['success'] == true) {
                    localStorage.setItem('jwt', data['data']['jwt']) //!!!!!!!!!!potential security issue here, but JWT can be converted into a httpOnly cookie, which can then be used to persist login, see https://blog.logrocket.com/jwt-authentication-best-practices/
                    setUrlToLogin(`https://www.3tonemusic.com/?rest_route=/simple-jwt-login/v1/autologin&JWT=${data['data']['jwt']}`); //http://localhost:8888/?rest_route=/simple-jwt-login/v1/autologin&JWT=
                    //console.log(data)///!!!!!!!!!remove this later
                } else {
                    console.log(data)///!!!!!!!!!remove this later
                    props.setServerMessage(data['data']['message']);
                }
            })
        }
    },[props.APIDetailsLoginUp]);

    useEffect(() => {
        if(urlToLogIn>0){
            fetch(urlToLogIn, {
                method: 'GET'
            })
            .then((response)=>{
                if(response.status== '200'){
                    props.setIsLoggedIn(true)
                    props.setUsername(props.APIDetailsLogin.user)
                    window.location.replace('http://noah3tone.github.io/3tonereact/#/')//URL
                } else {
                    console.log('there was an error')
                }
            })
        }
    },[urlToLogIn])

    return(
        <>
        </>
    )

}

export default LoginAPI;

//server side script will add auth key
//then send completed request to wordpress endpoint (1)


//wordpress will send back success/fail

//serverside script willl then try to authenticate by sending username and password to another endpoint (2)

//if successful, returns a JWT /// convert JWT to cookie


//window.location change to a url with the JWT attached, which ill log the use in to wordpress //// attach cookie instead of JWT