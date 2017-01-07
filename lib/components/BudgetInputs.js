import React from 'react';
import { pick, map, extend } from 'lodash';
import firebase, { reference } from '../firebase';

export default class BudgetInputs extends React.Component {
  constructor(props) {
    super(props)
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
  }

  update(e) {
    firebase.database().ref('budgets/' + this.props.keys).set({
      item: this.state.draftBudgetItem,
      cost: Number(this.state.draftItemValue) });
  }

  // addNew(e) {
  //   e.preventDefault();
  //   const Data = {
  //     user: pick(this.props.user, 'displayName', 'email', 'uid', 'photoURL'),
  //     item: this.state.draftBudgetItem,
  //     cost: Number(this.state.draftItemValue),
  //     createdAt: Date.now(),
  //   };
  //   const newBudgetKey = firebase.database().ref('budgets').push().key;
  //   const updates = {};
  //   updates['/budgets/' + newBudgetKey] = Data;
  //   return firebase.database().ref().update(updates);
  // }

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
          <button onClick={this.update.bind(this)}>
            Update
          </button>
        </div>
    )
  }
  }
