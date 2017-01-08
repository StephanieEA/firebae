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

    }
  }

  render() {
    return (
      <section className='account-setup'>
          <form>
            <table className='setup-table'>
              <tbody>
              <BudgetIncome />
                {/* <tr>
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
                </tr> */}
                <tr>
                  <td className='tdQuest'>
                    How much money do you want to spend on
                    <BudgetInputs user={this.props.user}
                                  keys={this.props.keys}
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
             onClick={() => {firebase.database().ref('users/').push({ user: pick(this.props.user, 'displayName', 'email', 'uid', 'photoURL'),})}}
            text='Submit'/>
      </section>
    )
  }
}
