import React from 'react';
import firebase, {signIn} from '.././firebase';

const Login = (user) => {
  if (!user) {
    return
    <div>
      <button > Login </button>
    </div>
  }
  return <div><p>Money Quote</p></div>;
}

export default Login;
