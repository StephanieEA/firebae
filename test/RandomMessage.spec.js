import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import RandomMessage from '../lib/components/RandomMessage';

describe('RandomMessage', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<RandomMessage />)
    assert.equal(wrapper.type(), 'div');
  });
});
