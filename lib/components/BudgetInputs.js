import React from 'react';
import { pick, map, extend } from 'lodash';
import firebase, { reference } from '../firebase';

export default class BudgetInputs extends React.Component {
  constructor() {
    super()
    this.state = {
      draftBudgetItem: '',
      draftItemValue: '',
    }
  }

  addNew(e) {
    e.preventDefault()
    const { draftBudgetItem, draftItemValue } = this.state;
    reference.push({
      user: pick(this.props.user, 'displayName', 'email', 'uid', 'photoURL'),
      item: draftBudgetItem,
      cost: Number(draftItemValue),
      createdAt: Date.now(),
    });

      // this.setState({ draftMessage: '', count: 0 });
  }

  handleChange(e) {
    this.setState({ draftBudgetItem: e.target.value })
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addNew(e)
    }
  }

  handleValueChange(e) {
    e.preventDefault()
    this.setState({ draftItemValue: e.target.value })
  }

  render() {
    return (
      <div>
        <input
          placeholder='rent'
          onChange={this.handleChange.bind(this)}/>
          <input
            placeholder='$800'
            className='tdInput'
            onChange={this.handleValueChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            />
        </div>
    )
  }
  }
