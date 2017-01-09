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
          onChange={this.props.updateItem}/>
        </td>
        <td>
          <input
            placeholder='$800'
            className='tdInput'
            onChange={this.props.updateValue}
            />
        </td>
        <td>
        </td>
      </tr>
    )
  }
  }
