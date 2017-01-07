import React from 'react';
import Button from './Button';
import BudgetInputs from './BudgetInputs';
import BudgetIncome from './BudgetIncome';

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
            // onClick={submit}
            text='Submit'/>
      </section>
    )
  }
}
