import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import Button from './Button';
import BudgetInputs from './BudgetInputs';

export default class AccountSetup extends React.Component {
  constructor() {
    super()
    this.state = {
      monthly: null,
      draftMessage: '',
    }
  }

  handleMonthly(e) {
    e.preventDefault()
    this.setState({monthly: this.state.draftMessage})
    this.pushToFB(this.state.monthly)
  }

  pushToFB(monthly){
        let numbers = this.state.draftMessage
      firebase.database().ref('budgets').push(Object.assign(monthly, {monthly: Number(numbers)}))
  }

  updateState(e) {
    this.setState( {draftMessage: Number(e.target.value)})
  }

  render(submit) {
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
                    onChange={this.updateState.bind(this)}/>
                  </td>
                  <td>
                    <button
                    className='table-btn'
                    onClick={this.handleMonthly.bind(this)}
                    ></button>
                  </td>
                </tr>
                <tr>
                  <td className='tdQuest'>
                    How much money do you want to spend on
                    <BudgetInputs
                        />?
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
