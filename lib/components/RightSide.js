import React from 'react';

const RightSide = ({ budgetItem, monthlyIncome, itemValue, loadArray }) =>
<section className='right-side'>
  <h1>BUDGET OVERVIEW</h1>
  <form>
    <table className='budget-table'>
      <tbody>
      <th></th>
        <tr>
          <td className='tdQuest'>
          {budgetItem}:{itemValue}
          </td>
          <td className='tdQuest'>
            Item Time: {loadArray[0].itemTime}
          </td>
        </tr>
      </tbody>
  </table>
  </form>
</section>

export default RightSide;
