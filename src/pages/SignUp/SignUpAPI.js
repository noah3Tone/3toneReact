// send username, email, password to serverside

import React, {useState, useEffect} from 'react';

const SignUpAPI = (props) => {

    const [urlToSignIn, setUrlToSignIn] = useState('')

    useEffect(()=>{
        if(props.APIDetailsSignUp.email.length > 0){
            
            let formData = new FormData();
            formData.append('user', props.APIDetailsSignUp.user)
            formData.append('email', props.APIDetailsSignUp.email)
            formData.append('pass', props.APIDetailsSignUp.pass)

            const url = 'http://localhost:8888/reg.php'//url to reg file on server http://178.62.64.31  http://localhost:8888
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then((response)=> response.json())
            .then((data)=>{
                if(data['success']===true){
                    localStorage.setItem('jwt', data['data']['jwt']) //!!!!!!!!!!potential security issue here, but JWT can be converted into a httpOnly cookie, which can then be used to persist login, see https://blog.logrocket.com/jwt-authentication-best-practices/
                    setUrlToSignIn(`http://localhost:8888/?rest_route=/simple-jwt-login/v1/autologin&JWT=${data['data']['jwt']}`)
                    console.log(data)///!!!!!!!!!remove this later
                } else {
                    console.log(data)///!!!!!!!!!remove this later
                    props.setServerMessage(data['data']['message']);
                }
            })
        }
    },[props.APIDetailsSignUp]);

    useEffect(() => {
        if(urlToSignIn.length > 0){
            fetch(urlToSignIn, {
                method: 'GET'
            })
            .then((response)=>{
                if(response.status== '200'){
                    props.setIsLoggedIn(true)
                    props.setUsername(props.APIDetailsSignUp.user)
                    window.location.replace('http://localhost:3000/#/')//URL
                } else {
                    console.log('there was an error')
                }
            })
        }
    },[urlToSignIn])
    
    return (
        <>
        </>
    );
}

export default SignUpAPI;

//server side script will add auth key
//then send completed request to wordpress endpoint (1)


//wordpress will send back success/fail

//serverside script willl then try to authenticate by sending username and password to another endpoint (2)

//if successful, returns a JWT /// convert JWT to cookie


//window.location change to a url with the JWT attached, which ill log the use in to wordpress //// attach cookie instead of JWT