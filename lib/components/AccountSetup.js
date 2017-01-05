import React from 'react';

const AccountSetup = ({submit}) =>
<section className='account-setup'>
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
<button className='submit-btn' onClick={submit}>Submit</button>
</section>

export default AccountSetup;
