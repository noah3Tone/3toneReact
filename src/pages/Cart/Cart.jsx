import React, { useState, useEffect } from 'react';
import "./Cart.scss";

const Cart = (props) => {

    //state for page text
    const [pageText, setPageText] = useState('You are not currently logged in. Please login to Checkout')
    const [email, setEmail] = useState('')

    return (
        <div className='cart-page'>
            <div className="cart-page__header">
                <h2>Profile Page</h2>
                <p>{pageText}</p>
                <p>{email}</p>
            </div>
            <div className="cart-page__cart">
                
            </div>
        </div>
    )
}

export default Cart;