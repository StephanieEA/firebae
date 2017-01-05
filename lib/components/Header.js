import React from 'react';

const Header = ({ user }) =>
<header>
<<<<<<< HEAD
  <h1 className='header-title'>Excellent Budgeting</h1>
  <h2 className='welcome'>Welcome, ... </h2>
=======
  <h1 className='header-title'>Dylbekanie</h1>
{user ? <h2 className='welcome'>Welcome, {user.displayName} </h2> : <h2></h2>}
>>>>>>> master
</header>


export default Header;
