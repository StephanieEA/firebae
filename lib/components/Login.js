import React from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router'
import Button from './Button';
import RandomMessage from './RandomMessage';

const Login = ({ setUser, authorize, user }) => {
  if (user) {
    return <button className="next-one"><Link to='/public/setup'>Account Setup</Link></button>
  }
  return (
      <div className='login-container'>
        <h2 className='loginh2'> The best budgeting app for you</h2>
        <section className='splash'>
          <img src="/lib/images/login.svg"/>
          <img src="/lib/images/information.svg"/>
          <img src="/lib/images/moneystack.svg"/>
        </section>
        <h3>Get started today!</h3>
        <Button className='login-btn'
                text='Login'
                onClick={() => {
          authorize().then(fromFirebase => setUser(fromFirebase))
        }} />
      <RandomMessage />
    </div>
  )
}


export default Login;
