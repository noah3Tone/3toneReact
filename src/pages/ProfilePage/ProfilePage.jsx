import React, { useState, useEffect } from 'react';

const ProfilePage = (props) => {

    //state for page text
    const [pageText, setPageText] = useState('You are not currently logged in. Please login to see your user profile')
    const [email, setEmail] = useState('')
    const [regDate, setRegDate] = useState('')

    //useEffect check localstorage for jwt     //////////////check http cookies for jwt
    useEffect(() =>{
        let userJWT = localStorage.getItem('jwt') || '';
        console.log(userJWT); //!
        if(userJWT.length>0){
            let url = `https://www.3tonemusic.com/?rest_route=/simple-jwt-login/v1/auth/validate&JWT=${userJWT}` //should default to a GET //http://localhost:8888/?rest_route=/simple-jwt-login/v1/auth/validate&JWT=
            .then(response => Response.json())
            .then(data=> {
                if(data['success']===true){ ///or status 200/201?
                    console.log('user is persisted')
                    setEmail(`Email: ${data['data']['user']['user_registered']}`)
                    setRegDate(`Date of registration: ${data['data']['user']['user_registered']}`)
                    setPageText(`${data['data']['user']['user_login']}'s User Profile`)
                    props.setIsLoggedIn(true);
                    props.setUsername(data['data']['user']['user_login']);
                    props.setServerMessage('');
                } else {
                    console.log(data, 'persist failed');
                    props.setServerMessage(data['data']['message']);
                }
            })
        }
    }, []);

    return (
        <div className='App'>
            <header className="App-Header">
                <h2>Profile Page</h2>
                <p>{props.serverMessage}</p>
                <p>{pageText}</p>
                <p>{email}</p>
                <p>{regDate}</p>
            </header>
        </div>
    )
}

export default ProfilePage;