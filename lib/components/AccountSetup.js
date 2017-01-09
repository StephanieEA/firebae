import React from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router'
import Button from './Button';
import BudgetInputs from './BudgetInputs';
import BudgetIncome from './BudgetIncome';
import RightSide from './RightSide';
import firebase, {reference} from '../firebase';
import { pick, map, extend } from 'lodash';


const  AccountSetup = (props) => {

const { keys, updateMonthly, user, itemValue, budgetItem, submission, updateValue } = props;

    return (
      <section className='account-setup'>
          <form>
            <table className='setup-table'>
              <tbody>
              <BudgetIncome updateMonthly={updateMonthly}/>
              <BudgetInputs user={user}
                    keys={keys}
                    itemValue={itemValue}
                    budgetItem={budgetItem}
                    updateValue={(e) => updateValue(e, 'draftItemValue')}
                    updateItem={(e) => updateValue(e, 'draftBudgetItem')}
              />
              </tbody>
          </table>
          </form>
          <Button
            className='submit-btn'
            onClick={submission}
            text='Submit'/>

             <p><Link to='/public/budgets'>Calculate</Link></p>
      </section>
    )
}

module.exports = AccountSetup;
