import React from 'react';
import { pick, map, extend } from 'lodash';
import firebase, { reference } from '../firebase';

export default class BudgetInputs extends React.Component {
  render() {
    return (
      <div>
        <input
          placeholder='rent'
          onChange={this.props.updateItem}/>
          <input
            placeholder='$800'
            className='tdInput'
            onChange={this.props.updateValue}
            />
        </div>
    )
  }
  }
