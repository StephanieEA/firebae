import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/Application';

describe('Application', () => {
  it.skip('renders as a <div>', () => {
    const wrapper = render(<Application />)
    assert.equal(wrapper.type(), 'div');
  });
});
