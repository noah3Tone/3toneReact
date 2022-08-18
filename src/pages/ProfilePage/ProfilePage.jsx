import React, { useState, useEffect } from 'react';
import "./ProfilePage.scss";

const ProfilePage = (props) => {

    //state for page text
    const [pageText, setPageText] = useState('You are not currently logged in. Please login to see your user profile')
    const [email, setEmail] = useState('')

    return (
        <div className='app'>
            <div className="app__header">
                <h2>Profile Page</h2>
                <p>{props.serverMessage}</p>
                <p>{pageText}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default ProfilePage;