import React from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router'
import Button from './Button';
import RandomMessage from './RandomMessage';

const Login = ({ setUser, authorize, user }) => {
  if (user) {
    return <button className="next-one"><Link to='/public/setup'>Account Setup</Link></button>
  }
  return (
      <div
        className='login-container'>
      <Button
        text='Login'
        onClick={() => {
          authorize().then(fromFirebase => setUser(fromFirebase))
        }} />
      <p className='quote'>Money Quote</p>
      <RandomMessage />
    </div>
  )
}


export default Login;
