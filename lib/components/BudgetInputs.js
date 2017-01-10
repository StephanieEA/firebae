import React from 'react';
import { pick, map, extend } from 'lodash';
import firebase, { reference } from '../firebase';

export default class BudgetInputs extends React.Component {
  render() {
    return (
      <div>
      <tr>
        <td>
          <p>Enter an item</p>
          <input
          className='tdInput'
          placeholder='rent'
          aria-label='enter an item'
          value={this.props.budgetItem}
          onChange={this.props.updateItem}/>
        </td>
      </tr>
      <tr>
        <td>
          <p>Enter your budget</p>
          <input
            placeholder='$800'
            className='tdInput'
            aria-label='enter the budget for that item'
            value={this.props.itemValue}
            onChange={this.props.updateValue}
            />
        </td>
      </tr>
    </div>
    )
  }
  }
