import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/images/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty container"  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em'
}}>
    <div style={{textAlign: 'center'}} className="cart-wrapper">
    <h2 style={{
        fontSize: '2rem',
        fontWeight: 700,
        color: '#000',
        marginBottom: 15
    }}>
      Empty cart <span>😕</span>
    </h2>
    <p style={{
        fontSize: 18,
        fontWeight: 400,
        color: '#777777',
        lineHeight: '120%'
    }}>
      You probably haven't ordered product yet. <br />
To order any product, go to the main page.
    </p>
    <img style={{
        margin: '2em 0'
    }} width={300} src={cartEmptyImg} alt="Empty cart" />
    <Link style={{
        display: 'block',
        backgroundColor: '#282828',
        borderRadius: 30,
        fontSize: '1rem',
        fontWeight: 500,
        padding: '16px 15px',
        maxWidth: 170,
        color: '#fff',
        margin: '0 auto'
    }} to="/" className="button button--black">
      Go Back
    </Link>
    </div>
  </div>
)