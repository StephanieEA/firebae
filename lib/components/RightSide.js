import React from 'react';

const RightSide = ({ budgetItem, monthlyIncome, itemValue }) =>
<section className='right-side'>
  <h1>BUDGET OVERVIEW</h1>
  <form>
    <table className='budget-table'>
      <tbody>
      <th>Total Income: {monthlyIncome}</th>
        <tr>
          <td className='tdQuest'>
          {budgetItem}:{itemValue}
          </td>
          <td className='tdQuest'>
            Remaining: {monthlyIncome - itemValue}
          </td>
        </tr>
      </tbody>
  </table>
  </form>
</section>

export default RightSide;
