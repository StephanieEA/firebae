import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import BudgetIncome from '../lib/components/BudgetIncome';

describe('BudgetIncome', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<BudgetIncome />)
    assert.equal(wrapper.type(), 'tr');
  });

});
