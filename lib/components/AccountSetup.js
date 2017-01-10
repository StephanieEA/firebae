import React from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router'
import Button from './Button';
import BudgetInputs from './BudgetInputs';
import BudgetIncome from './BudgetIncome';
import RightSide from './RightSide';
import firebase, {reference} from '../firebase';
import { pick, map, extend } from 'lodash';


const  AccountSetup = (props) => {

const { keys, updateMonthly, user, itemValue, budgetItem, submission, updateValue, updateTime } = props;

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
          <p className='instruction-acc-setup'>enter a catergory and a corresponding budget and click submit</p>
          <Button
            className='submit-btn'
            onClick={submission}
            text='Submit'/>

             <p><Link to='/public/budgets'><div className='burns-sign-2'></div></Link></p>
      </section>
    )
}

module.exports = AccountSetup;
