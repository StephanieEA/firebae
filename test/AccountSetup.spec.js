import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import AccountSetup from '../lib/components/AccountSetup';

describe('AccountSetup', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<AccountSetup />)
    assert.equal(wrapper.type(), 'section');
  });
  it('should have an input that can submit a monthly income', () => {
    const wrapper = mount(<AccountSetup />)
    const input = wrapper.find('#monthlytest');
    input.simulate('change', input.node.value = '2000')
    expect(input.node.value).to.equal('2000');
  })
});
