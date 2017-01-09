import React from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router'
import Button from './Button';
import BudgetInputs from './BudgetInputs';
import BudgetIncome from './BudgetIncome';
import RightSide from './RightSide';
import firebase, {reference} from '../firebase';
import { pick, map, extend } from 'lodash';


export default class AccountSetup extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <section className='account-setup'>
          <form>
            <table className='setup-table'>
              <tbody>
              <BudgetIncome updateMonthly={this.props.updateMonthly}/>
              <BudgetInputs user={this.props.user}
                    keys={this.props.keys}
                    updateValue={this.props.updateValue}
                    updateItem={this.props.updateItem}
              />
              </tbody>
          </table>
          </form>
          <Button
            className='submit-btn'
            onClick={this.props.submission}
            text='Submit'/>

             <p><Link to='/public/budgets'>Calculate</Link></p>
      </section>
    )
  }
}
