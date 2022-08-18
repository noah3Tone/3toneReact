import React, { useState, useEffect } from 'react';
import "./SupportPage.scss";

const SupportPage = (props) => {

    //state for page text
    const [email, setEmail] = useState('')

    return (
        <div className='app'>
            <h2>Contact</h2>
            <form className='support-page-form'>
                <input>Name</input>
                <input>Email</input>
                <input>Your Question</input>
                <p>{email}</p>
            </form>
        </div>
    )
}

export default SupportPage;