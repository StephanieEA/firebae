import React from 'react';

const Header = ({ user }) =>
<header>
  <h1 className='header-title'>
      <img src="/lib/images/burnshandfulofmoney.svg" alt="Mr.Burns with handfulls of money" className='logo'/>
      Excellent Budgeting
  </h1>
{user ? <h2 className='welcome'>Welcome, {user.displayName} </h2> : <h2></h2>}
</header>


export default Header;
