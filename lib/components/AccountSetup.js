import React from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router'
import Button from './Button';
import BudgetInputs from './BudgetInputs';
import BudgetIncome from './BudgetIncome';
import RightSide from './RightSide';
import firebase, {reference} from '../firebase';
import { pick, map, extend } from 'lodash';


export default class AccountSetup extends React.Component {


  submission(){
    firebase.database().ref(this.props.user.uid).push({ user: pick(this.props.user, 'displayName', 'email', 'uid', 'photoURL'),
    monthlyIncome: this.state.draftMonthly,
    budgetItem: this.state.draftBudgetItem,
    itemValue: this.state.draftItemValue,
   createdAt: Date.now(),
  })
  this.dorender = true;
  this.dontrender = false;
  console.log(this.dorender)
}


  render() {

    return (
      <section className='account-setup'>
            <Match exactly pattern="/public/budgets" render={ () => (<RightSide
              user={this.state.user}
              keys={this.state.fbkeys}
              budgetItem={this.state.draftBudgetItem}
              itemValue={this.state.draftItemValue}
              monthlyIncome={this.state.draftMonthly}
             />)}/>
          <form>
            <table className='setup-table'>
              <tbody>
              <BudgetIncome updateMonthly={this.props.updateMonthly}/>
                <tr>
                  <td className='tdQuest'>
                    How much money do you want to spend on
                    <BudgetInputs user={this.props.user}
                                  keys={this.props.keys}
                                  updateValue={this.props.updateValue}
                                  updateItem={this.props.updateItem}
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
             onClick={this.submission.bind(this)}
            text='Submit'/>
             <p><Link to='/public/budgets'>Calculate</Link></p>
      </section>
    )
  }
}
