import React from 'react';

const Header = ({ user }) =>
<header>
    <img src="../images/burnshandfulofmoney.svg" alt="Mr.Burns with handfulls of money" className='logo'/>
    <h1 className='header-title' aria-label='excellent budgeting'>
        Excellent Budgeting
    </h1>
{user ? <p aria-label='you are logged in' className='welcome'>Welcome, {user.displayName} </p> : <p></p>}
</header>


export default Header;
