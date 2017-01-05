import React from 'react';
import Button from './Button';

const AccountSetup = ({ submit, user, setup }) => {
  if (user && !setup) {
    return <section className='account-setup'>
    <form>
      <table className='setup-table'>
        <tbody>
      <tr>
        <td className='tdQuest'>How much money do you want to spend this month?</td>
        <td><input className='tdInput'/></td>
        <td><button className='table-btn'></button></td>
      </tr>
      <tr>
        <td className='tdQuest'>How much money do you want to spend on rent?</td>
        <td><input className='tdInput'/></td>
        <td><button className='table-btn'></button></td>
      </tr>
    </tbody>
    </table>
    </form>
    <Button
      className='submit-btn'
      onClick={submit}
      text='Submit'/>
</section>
  }
  return <div></div>
}
export default AccountSetup;
