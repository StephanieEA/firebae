import React from 'react';
import sumData from '../helpers/sumData'

export default class RightSide extends React.Component {

  render() {
    debugger
    const sum = 0
    const loadArray = this.props.loadArray;
    const valueArray = loadArray.map((data, index) => sumData(data.itemValue, sum))
    const monthlyIncomes = this.props.monthlyIncome[0].monthlyIncome
    const itemTotal = valueArray.reduce((a, b) => a + b)
    const renderBudgetObjects = this.props.loadArray.map((data, index) =>
    (
      <tr className='budget-display' key={index}>
        <td className='tdQuest'>Budget Item: {data.budgetItem}</td>
        <td className='tdQuest'>Cost: ${data.itemValue}</td>
        <td className='tdQuest'>Time: {data.itemTime}</td>
      </tr>))

    return (
<section className='right-side'>
  <form>
    <table className='budget-table'>
      <tbody>
      <tr><th>MONTHLY INCOME: ${monthlyIncomes}</th></tr>
        {renderBudgetObjects}
        <tr><td>REMAINING BUDGET: ${monthlyIncomes - itemTotal}</td></tr>
      </tbody>
  </table>
  </form>
</section>)
  }
}
