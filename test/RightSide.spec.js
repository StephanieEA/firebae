import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import RightSide from '../lib/components/RightSide';

describe('RightSide', () => {
  it('renders as a <aside>', () => {
    const wrapper = shallow(<RightSide />)
    assert.equal(wrapper.type(), 'section');
  });
});
