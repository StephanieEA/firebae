import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import AccountSetup from '../lib/components/AccountSetup';

describe('AccountSetup', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<AccountSetup />)
    assert.equal(wrapper.type(), 'section');
  });
});
