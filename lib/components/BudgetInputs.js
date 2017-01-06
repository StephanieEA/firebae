import React from 'react';

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


  handleChange(e) {
      e.preventDefault()
      console.log('change')
      this.setState( {draftBudgetItem: e.target.value} )
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      e.preventDefault()
      console.log('enter pressed')
      this.setState( {budgetItem: this.state.draftBudgetItem} )
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
