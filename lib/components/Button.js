import React from 'react';


const Button = ({ text, onClick, className }) =>

  <button
    className={className}
    aria-label={text}
    onClick={onClick}>{text}</button>

export default Button;
