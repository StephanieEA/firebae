import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import BudgetInputs from '../lib/components/BudgetInputs';

describe('BudgetInputs', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<BudgetInputs />)
    assert.equal(wrapper.type(), 'tr');
  });

  it('has a 2 td children', () => {
    const wrapper = shallow(<BudgetInputs />);
    expect(wrapper.find('td')).to.have.length(2);
  })

  it('has a td input with a placeholder rent', () => {
    const wrapper = shallow(<BudgetInputs />);
    const input = wrapper.find('.tdInput').first();
    expect(input.props().placeholder).to.equal('rent');
  })

  it('has a td input with a placeholder $800', () => {
    const wrapper = shallow(<BudgetInputs />);
    const input = wrapper.find('.tdInput').at(1);
    expect(input.props().placeholder).to.equal('$800');
  })

  it.skip('updates the budgetItem', () => {
    const onChange = sinon.spy();
    const fakeValue = 'fakeValue'
    const wrapper = shallow(<BudgetInputs onChange={onChange} value={fakeValue}/>);
    const itemField = wrapper.find('.tdInput').first();
    const event1 = { target: { value: 'dogs' } };
    const event2 = { target: { value: 'frogs' } };
    expect(itemField.props().value).to.equal('budgetItem')
    assert.equal(onChange.calledOnce, false);
    inputField.simulate('change');
    assert.equal(onChange.calledOnce, true);
    inputField.simulate('change', event2);
    assert.equal(onChange.calledTwice, true);
  });

});
