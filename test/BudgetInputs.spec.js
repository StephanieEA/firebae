import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import BudgetInputs from '../lib/components/BudgetInputs';

describe('BudgetInputs', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<BudgetInputs />)
    assert.equal(wrapper.type(), 'tr');
  });

  it('has a 3 td children', () => {
    const wrapper = shallow(<BudgetInputs />);
    expect(wrapper.find('td')).to.have.length(3);
  })

  it('has a td input with a placeholder rent', () => {
    const wrapper = shallow(<BudgetInputs />);
    const 
    expect(wrapper.find('td')).to.have.length(3);
  })

});
