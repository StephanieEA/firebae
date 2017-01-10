import React from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router'
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import AccountSetup from '../lib/components/AccountSetup';
import Button from '../lib/components/Button';


describe('AccountSetup', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<AccountSetup />)
    assert.equal(wrapper.type(), 'section');
  });

  it('renders a form child', () => {
    const wrapper = shallow(<AccountSetup />);
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('renders a table child', () => {
    const wrapper = shallow(<AccountSetup/>);
    expect(wrapper.find('.setup-table')).to.have.length(1)
  });

  it('renders a BudgetIncome', () => {
    const wrapper = shallow(<AccountSetup />);
    expect(wrapper.find('BudgetIncome')).to.have.length(1);
  });

  it('renders a BudgetInputs', () => {
    const wrapper = shallow(<AccountSetup />);
    expect(wrapper.find('BudgetInputs')).to.have.length(1);
  });

  it('should render a submit button', () => {
    const wrapper = shallow(<AccountSetup />)
    const submitButton = wrapper.find('.submit-btn');
    expect(submitButton.props().text).to.equal('Submit');
  });

});
