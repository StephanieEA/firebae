import React from 'react';

export default class BudgetIncome extends React.Component {
  render() {
    return (
      <tr>
        <td className='tdQuest'>
          How much money do you want to spend this month?
        </td>
        <td>
          <input
          className='tdInput'
          type='number'
          onChange={this.props.updateMonthly}/>
        </td>
      </tr>
    )
  }
}
