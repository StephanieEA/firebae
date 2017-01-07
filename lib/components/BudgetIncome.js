import React from 'react';

export default class BudgetIncome extends React.Component {
  constructor() {
    super()
    this.state = {
      monthly: '',
      draftMessage: '',
    }
  }

  handleMonthly(e) {
    e.preventDefault()
    const numbers = this.state.draftMessage
    this.setState({ monthly: numbers })
  }

  updateState(e) {
    this.setState({ draftMessage: e.target.value })
  }

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
          onChange={this.updateState.bind(this)}/>
        </td>
        <td>
          <button
          className='table-btn'
          onClick={this.handleMonthly.bind(this)}
          ></button>
        </td>
      </tr>
    )
  }
}
