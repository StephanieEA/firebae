import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import BudgetIncome from '../lib/components/BudgetIncome';

describe('BudgetIncome', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<BudgetIncome />)
    assert.equal(wrapper.type(), 'tr');
  });

  it('renders 2 table data children', () => {
    const wrapper = shallow(<BudgetIncome />);
    expect(wrapper.find('td')).to.have.length(2);
  });

  it('renders an input child', () => {
    const wrapper = shallow(<BudgetIncome />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('the input child has a property type of number', () => {
    const wrapper = shallow(<BudgetIncome />);
    const input = wrapper.find('.tdInput');
    expect(input.props().type).to.equal('number');
  })

  it.skip('updates the draftMonthly as the user types', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<BudgetIncome onChange={onChange}/>);
    const inputWrapper = wrapper.find('input');
    const event1 = { target: { value: 14 } };
    const event2 = { target: { value: 14000 } };
    inputWrapper.simulate('change')
  //  expect(onChange.called).to.be.true
    assert.equal(onChange.calledOnce, true);
    inputWrapper.simulate('change', event2);
    assert.equal(onChange.calledTwice, true);
  });


});
