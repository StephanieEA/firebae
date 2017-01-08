import React from 'react';
import quoteArray from '../helpers/Quotes'

const RandomMessage = () =>
  <div className='random-message'>
    {quoteArray[1]}
  </div>
export default RandomMessage;
