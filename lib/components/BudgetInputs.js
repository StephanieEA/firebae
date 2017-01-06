import React from 'react';

export default class BudgetInputs extends React.Component {
  constructor() {
    super()
    this.state = {
      draftBudgetItem: '',
      budgetItem: null,
      budgetItemValue: '',
    }
  }


  handleChange(e) {
      e.preventDefault()
      console.log('change')
      this.setState( {draftBudgetItem: e.target.value})
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      e.preventDefault()
      console.log('enter pressed')
      this.setState( {budgetItem: this.state.draftBudgetItem} )
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
            type='number'
            />
        </div>
      )
    }
  }
