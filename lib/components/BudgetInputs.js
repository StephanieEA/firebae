import React from 'react';
import firebase, { reference } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class BudgetInputs extends React.Component {
  constructor() {
    super()
    this.state = {
      draftBudgetItem: '',
      budgetItem: '',
      draftItemValue: '',
      budgetItemValue: '',
    }
  }

  addNew(e) {
    e.preventDefault()
    const { draftBudgetItem, draftItemValue } = this.state;
    reference.push({
      user: pick(this.props.user, 'displayName', 'email', 'uid', 'photoURL'),
      content: draftBudgetItem,
      createdAt: Date.now(),
    });

      // this.setState({ draftMessage: '', count: 0 });
    }

  handleChange(e) {
      this.setState( {draftBudgetItem: e.target.value} )
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      // e.preventDefault()
      // this.setState( {budgetItem: this.state.draftBudgetItem} )
      this.addNew(e)
    }
  }

  handleValueChange(e) {
    e.preventDefault()
    this.setState( {draftItemValue: e.target.value} )
  }

  handleValueKeyPress(e) {
    if(e.key === 'Enter') {
      e.preventDefault()
      this.setState( {budgetItemValue: this.state.draftItemValue} )
    }
  }

  render() {
    return(
      <div>
        <input
          placeholder='rent'
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}/>
          <input
            placeholder='$800'
            className='tdInput'
            onChange={this.handleValueChange.bind(this)}
            onKeyPress={this.handleValueKeyPress.bind(this)}
            />
        </div>
      )
    }
  }
