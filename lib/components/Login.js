import React from 'react';
import firebase, {authorize, signIn} from '.././firebase';
import Button from './Button';
import { BrowserRouter, Route, Link, Match } from 'react-router'

const Login = ({setUser, authorize, user})  =>
  { if(user) {
    return <div><Link className="next-one" to='/public/setup'>Account Setup</Link></div>
  }
    return (
      <div
        className='login-container'>
      <Button
        text='Login'
        onClick={() => {authorize().then((fromFirebase) => setUser(fromFirebase))
        }} />
      <p className='quote'>Money Quote</p>
      </div>
      )
  }


export default Login;
