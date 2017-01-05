import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Login from '../lib/components/Login';

describe('Login', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Login />)
    assert.equal(wrapper.type(), 'div');
  });

});
