import React from 'react';
import firebase, {authorize, signIn} from '.././firebase';

const Login = ({setUser, authorize})  => {
    return <div className='login-container'><button className='login-btn' onClick={() => {authorize().then((fromFirebase) => setUser(fromFirebase))
    }}>Login</button><p className='quote'>Money Quote</p></div>
  }


export default Login;
