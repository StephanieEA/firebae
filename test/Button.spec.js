import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Button from '../lib/components/Button';

describe('Button', () => {
  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />)
    assert.equal(wrapper.type(), 'button');
  });
});
