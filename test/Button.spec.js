import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Button from '../lib/components/Button';

describe('Button', () => {
  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />)
    assert.equal(wrapper.type(), 'button');
  });

  it('has className and onClick properties', () => {
    const fakeName = 'fakeName'
    const fakeClick = 'fakeClick'
    const wrapper = shallow (<Button className={fakeName} onClick={fakeClick}/>)
    const buttonWrapper = wrapper.find('button')
    expect(buttonWrapper.props().className).to.equal('fakeName')
    expect(buttonWrapper.props().onClick).to.equal('fakeClick')
  })

  it('renders text correctly', () => {
    const fakeText = 'Submit'
    const wrapper = shallow(<Button  text={fakeText}/>)
    const buttonText = wrapper.find('button').text()
    expect(buttonText).to.equal('Submit')
  });
});
