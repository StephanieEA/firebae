import React from 'react';

export default class BudgetInputs extends React.Component {


  handleChange(e) {
      e.preventDefault()
      console.log('change')
      this.props.updateState(e)
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      e.preventDefault()
      console.log('enter pressed')
      this.props.budgetInputs(e)
    }
  }

  render(onChange, budgetInputs, updateState) {
    return(
      <div>
        <input
          placeholder={onChange}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}/>
        </div>
      )
    }
  }
