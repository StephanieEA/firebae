import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Header from '../lib/components/Header';

describe('Header', () => {
  it('renders as a <header>', () => {
    const wrapper = shallow(<Header />)
    assert.equal(wrapper.type(), 'header');
  });

  it('has a title Excellent Budgeting', () => {
    const wrapper = shallow(<Header />)
    const header = wrapper.find('h1')
    expect(header.text()).to.equal('Excellent Budgeting')
  })

  it('if there is no user there is no welcome message', () => {
    const user = false
    const wrapper = shallow(<Header user={user}/>)
    expect(wrapper.find('p').text()).to.equal('')
  })

  it('if there is a user the welcome message will render', () => {
    const user = true
    const wrapper = shallow(<Header user={user}/>)
    expect(wrapper.find('p').text()).to.equal('Welcome, ')
  })
});
