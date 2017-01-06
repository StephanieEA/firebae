import React from 'react';

const Button = ({text, onClick}) => {
  return (
  <button className='login-btn'
    onClick={onClick}>{text}</button>
  )
}


export default Button;
