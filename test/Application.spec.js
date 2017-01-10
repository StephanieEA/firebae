import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../lib/components/Application';

describe('Application', () => {
  it.skip('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'BrowserRouter');
  });

  it('renders a BrowserRouter', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('BrowserRouter')).to.have.length(1);
  });

  it('renders a div with classname .application', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('.application')).to.have.length(1);
  });

  it('renders a header component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('Header')).to.have.length(1);
  });

  it('renders 3 Match components', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('Match')).to.have.length(3);
  });

  it('renders a footer component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('Footer')).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Application.prototype, 'componentDidMount');
    const wrapper = mount(<Application />);
    expect(Application.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
