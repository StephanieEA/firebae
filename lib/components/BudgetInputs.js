import React from 'react';
import { pick, map, extend } from 'lodash';
import firebase, { reference } from '../firebase';

export default class BudgetInputs extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <input
          className='tdInput'
          placeholder='rent'
          value={this.props.budgetItem}
          onChange={this.props.updateItem}/>
        </td>
        <td>
          <input
            placeholder='$800'
            className='tdInput'
            value={this.props.itemValue}
            onChange={this.props.updateValue}
            />
        </td>
        <td>
        </td>
      </tr>
    )
  }
  }
