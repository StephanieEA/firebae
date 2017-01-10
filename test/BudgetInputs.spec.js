import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import BudgetInputs from '../lib/components/BudgetInputs';

describe('BudgetInputs', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<BudgetInputs />)
    assert.equal(wrapper.type(), 'div');
  });

  it('has 2 td children', () => {
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

  it('updates the budgetItem', () => {
    const onChange = sinon.spy();
    const fakeValue = 'fakeValue'
    const wrapper = shallow(<BudgetInputs updateItem={onChange} />);
    const itemField = wrapper.find('.tdInput').first();
    const event1 = { target: { value: 'dogs' } };
    const event2 = { target: { value: 'frogs' } };
    assert.equal(onChange.calledOnce, false);
    itemField.simulate('change', event1);
    assert.equal(onChange.calledOnce, true);
    itemField.simulate('change', event2);
    assert.equal(onChange.calledTwice, true);
  });

  it('updates the item value', () => {
    const onChange = sinon.spy();
    const fakeValue = 'fakeValue'
    const wrapper = shallow(<BudgetInputs updateValue={onChange} />);
    const valueField = wrapper.find('.tdInput').at(1);
    const event1 = { target: { value: '800' } };
    const event2 = { target: { value: '10' } };
    assert.equal(onChange.calledOnce, false);
    valueField.simulate('change', event1);
    assert.equal(onChange.calledOnce, true);
    valueField.simulate('change', event2);
    assert.equal(onChange.calledTwice, true);
  });
});
