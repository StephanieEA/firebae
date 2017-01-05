import React from 'react';
import firebase, {authorize, signIn} from '.././firebase';
import Button from './Button';
import RandomMessage from './RandomMessage';

const Login = ({setUser, authorize})  =>
  {
    return (
      <div
        className='login-container'>
      <Button
        text='Login'
        onClick={() => {authorize().then((fromFirebase) => setUser(fromFirebase))
        }} />
      <p className='quote'>Money Quote</p>
      <RandomMessage />
    </div>
      )
  }


export default Login;
