import React from 'react';

const BudgetInputs = ({onChange, budgetInputs, updateState}) => {
  return(
    <div>
      <input
        placeholder={onChange}
        onChange={budgetInputs}/>
    </div>
  )
}

export default BudgetInputs;
