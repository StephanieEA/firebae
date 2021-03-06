import React from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router'
import { pick, map, extend } from 'lodash';
import Button from './Button';
import RandomMessage from './RandomMessage';
import firebase, { reference, signIn } from '../firebase'

const Login = ({ authorize, user }) => {
  if (user) {
    return <div className="next-one"><Link
        to='/setup'
        aria-label='click here'
        className="next-one"><div className='burns-sign'></div></Link></div>
  }
  return (
      <div className='login-container'>
        <h2 className='loginh2'> The best budgeting app for you</h2>
        <section className='splash'>
          <section className='login-pic'>
            <img
              src="./images/login.svg"
              alt='a picture of an arrow to log in'/>
            <p className='login-pic-text'>Log in with your email</p>
        </section>
          <section className='information-pic'>
            <img
              src="./images/information.svg"
              alt="picture of two speech bubbles"/>
            <p className='information-pic-text'>Enter Your Information</p>
          </section>
          <section className='moneystack-pic'>
            <img
              src="./images/moneystack.svg"
              alt='stack of coins'/>
            <p className='moneystack-pic-text'>Log spendings and save!</p>
          </section>
        </section>
        <h3>Get started today!</h3>
        <Button className='login-btn'
                text='Login'
                onClick={authorize}/>
      <RandomMessage />
    </div>
  )
}

export default Login;
