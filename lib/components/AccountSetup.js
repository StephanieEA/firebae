import React from 'react';
import Button from './Button';
import BudgetInputs from './BudgetInputs';
import BudgetIncome from './BudgetIncome';
import firebase, {reference} from '../firebase';
import { pick, map, extend } from 'lodash';


export default class AccountSetup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      draftMonthly: '',
      draftBudgetItem: '',
      draftItemValue: '',
    }
  }

  updateMonthly(e) {
    this.setState({ draftMonthly: e.target.value })
  }

  updateValue(e) {
    e.preventDefault()
    this.setState({ draftItemValue: e.target.value })
  }

  updateItem(e) {
    this.setState({ draftBudgetItem: e.target.value })
  }


  render() {
    return (
      <section className='account-setup'>
          <form>
            <table className='setup-table'>
              <tbody>
              <BudgetIncome updateMonthly={this.updateMonthly.bind(this)}/>
                <tr>
                  <td className='tdQuest'>
                    How much money do you want to spend on
                    <BudgetInputs user={this.props.user}
                                  keys={this.props.keys}
                                  updateValue={this.updateValue.bind(this)}
                                  updateItem={this.updateItem.bind(this)}
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
             onClick={() => {firebase.database().ref(this.props.user.uid).push({ user: pick(this.props.user, 'displayName', 'email', 'uid', 'photoURL'),
             monthlyIncome: this.state.draftMonthly,
             budgetItem: this.state.draftBudgetItem,
             itemValue: this.state.draftItemValue,
           createdAt: Date.now(),
         })}}
            text='Submit'/>
      </section>
    )
  }
}
