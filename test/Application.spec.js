import React from 'react';
import moment from 'moment';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../lib/components/Application';

describe('Application', () => {
  it('renders an Application', () => {
    const wrapper = mount(<Application />);
    expect(wrapper.find('Application')).to.have.length(1);
  });

  it('renders a div with classname .application', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('.application')).to.have.length(1);
  });

  it('renders a header component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('Header')).to.have.length(1);
  });

  it('renders 3 Match components', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('Match')).to.have.length(3);
  });

  it('has a state of loadArray equal to an empty array', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().loadArray).to.deep.equal([])
  })

  it('has a state of monthlyIncome equal to null', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().monthlyIncome).to.deep.equal(null)
  })

  it('has a state of budgets with default key vale pairs', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().budgets).to.deep.equal({
      draftBudgetItem: '',
      draftItemValue: '',
      itemTime: moment(Date.now()).format('MM/D, h:mm a'),
    })
  })

  it('has a default state of user equal to null', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().user).to.deep.equal(null)
  })

  it('has a default state of draftMonthly equal to ""', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().draftMonthly).to.deep.equal('')
  })
});
