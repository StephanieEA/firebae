import React from 'react';
import quoteArray from '../helpers/Quotes'

const RandomMessage = () =>
  <div className='random-message'>
    {quoteArray[Math.floor(Math.random() * quoteArray.length)]}
  </div>
export default RandomMessage;
