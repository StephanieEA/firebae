import React from 'react';
import firebase, {authorize, signIn} from '.././firebase';
import Button from './Button';

const Login = ({setUser, authorize, user})  =>
  { if(user) {
    return <div></div>
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
