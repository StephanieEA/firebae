import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Login from '../lib/components/Login';

describe('Login', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<Login user={false}/>)
    assert.equal(wrapper.type(), 'div');
  });

  it('should render a login button if user not logged in', () => {
    const wrapper = mount(<Login user={false}/>)
    const loginbutton = wrapper.find('button')
    assert.equal(loginbutton.text(), 'Login');
  });
});
