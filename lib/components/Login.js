import React from 'react';
import firebase, {authorize, signIn} from '.././firebase';

const Login = ({setUser, authorize})  => {
    return <div className='login-container'><button onClick={() => {authorize().then((fromFirebase) => setUser(fromFirebase))
    }}>Login</button><p>Money Quote</p></div>
  }


export default Login;
