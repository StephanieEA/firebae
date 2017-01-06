import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import LeftSide from '../lib/components/LeftSide';

describe('LeftSide', () => {
  it('renders as a <aside>', () => {
    const wrapper = shallow(<LeftSide />)
    assert.equal(wrapper.type(), 'aside');
  });
});
