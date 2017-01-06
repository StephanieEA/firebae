import React from 'react';
import Button from './Button';
import BudgetInputs from './BudgetInputs';

export default class AccountSetup extends React.Component {
  constructor() {
    super()
    this.state = {
      budgetItem: null,
      draftBudgetItem: '',
    }
  }
  budgetInputs(e) {
    this.setState( {budgetItem: this.state.draftBudgetItem} )
  }

  updateState(e) {
    this.setState( {draftBudgetItem: e.target.value})
  }

  render(submit, handleMonthly, updateState) {
    return(
      <section className='account-setup'>
          <form>
            <table className='setup-table'>
              <tbody>
                <tr>
                  <td className='tdQuest'>
                    How much money do you want to spend this month?
                  </td>
                  <td>
                    <input
                    className='tdInput'
                    type='number'
                    onChange={updateState}/>
                  </td>
                  <td>
                    <button
                    className='table-btn'
                    onClick={handleMonthly}
                    ></button>
                  </td>
                </tr>
                <tr>
                  <td className='tdQuest'>
                    How much money do you want to spend on
                    <BudgetInputs
                      budgetInputs={this.budgetInputs.bind(this)}
                      updateState={this.updateState.bind(this)}
                        />?
                  </td>
                  <td>
                    <input
                    className='tdInput'
                    type='number'
                    onChange={updateState}/>
                  </td>
                  <td>
                    <button className='table-btn'></button>
                  </td>
                </tr>
              </tbody>
          </table>
          </form>
          <Button
            className='submit-btn'
            onClick={submit}
            text='Submit'/>
      </section>
    )
  }
}
