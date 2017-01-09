import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import BudgetInputs from '../lib/components/BudgetInputs';

describe('BudgetInputs', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<BudgetInputs />)
    assert.equal(wrapper.type(), 'tr');
  });

});
