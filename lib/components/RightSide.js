import React from 'react';
import PieChart from 'react-simple-pie-chart';
import sumData from '../helpers/sumData';

export default class RightSide extends React.Component {

  // componentDidMount() {
  //   debugger;
  //   if (!this.props.user) {
  //     this.props.authorize
  //   }
  // }

  render() {
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
      <tbody className='display-container'>
      <tr><th>MONTHLY INCOME: ${monthlyIncomes}</th></tr>
        {renderBudgetObjects}
        <tr><td className='remaining-budget'>REMAINING BUDGET: ${monthlyIncomes - itemTotal}</td></tr>
      </tbody>
  </table>
  </form>
  <PieChart
    classname='pie-chart'
  slices={[
    {
      color: '#AD0909',
      value: itemTotal,
    },
    {
      color: '#7BD8B0',
      value: Number(monthlyIncomes-itemTotal),
    },
  ]}
/>
</section>)
  }
}
