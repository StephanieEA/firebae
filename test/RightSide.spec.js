import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import RightSide from '../lib/components/RightSide';

describe('RightSide', () => {

  it('renders as a <section>', () => {
    const fakeArray = [{ budgetItem: 'dogfood', firebaseId: '-Ka6IY_N1JYoFGp-QVwK', itemTime: "01/10, 12:35 am", itemValue: "20" }];
    const fakeIncome = [{ firebaseId: "-Ka6IY_SQphMgLowu7eI", key: 0, monthlyIncome: "5000" }]
    const wrapper = shallow(<RightSide loadArray={fakeArray} monthlyIncome={fakeIncome}/>)
    assert.equal(wrapper.type(), 'section');
  });

  it('should have a child <form>', () => {
    const fakeArray = [{ budgetItem: 'dogfood', firebaseId: '-Ka6IY_N1JYoFGp-QVwK', itemTime: "01/10, 12:35 am", itemValue: "20" }];
    const fakeIncome = [{ firebaseId: "-Ka6IY_SQphMgLowu7eI", key: 0, monthlyIncome: "5000" }]
    const wrapper = shallow(<RightSide loadArray={fakeArray} monthlyIncome={fakeIncome}/>)
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should have a child <table>', () => {
    const fakeArray = [{ budgetItem: 'dogfood', firebaseId: '-Ka6IY_N1JYoFGp-QVwK', itemTime: "01/10, 12:35 am", itemValue: "20" }];
    const fakeIncome = [{ firebaseId: "-Ka6IY_SQphMgLowu7eI", key: 0, monthlyIncome: "5000" }]
    const wrapper = shallow(<RightSide loadArray={fakeArray} monthlyIncome={fakeIncome}/>)
    expect(wrapper.find('table')).to.have.length(1);
  });

  it('should render a table header with the correct monthlyIncome', () => {
    const fakeArray = [{ uid: '3452452543', budgetItem: 'dogfood', itemValue: 300 }];
    const fakeIncome = [{ firebaseId: "-Ka6IY_SQphMgLowu7eI", key: 0, monthlyIncome: "5000" }]
    const wrapper = shallow(<RightSide loadArray={fakeArray} monthlyIncome={fakeIncome}/>)
    expect(wrapper.find('th').text()).to.equal('MONTHLY INCOME: $5000');
  });

  it('should render budgetObjects correctly', () => {
    const fakeArray = [{ uid: '3452452543', budgetItem: 'dogfood', itemValue: 300, itemTime: "01/10, 12:35 am" }];
    const fakeIncome = [{ firebaseId: "-Ka6IY_SQphMgLowu7eI", key: 0, monthlyIncome: "5000" }]
    const wrapper = shallow(<RightSide loadArray={fakeArray} monthlyIncome={fakeIncome}/>)
    const item = wrapper.find('td').first().text();
    const cost = wrapper.find('td').at(1).text();
    const time = wrapper.find('td').at(2).text();
    expect(item).to.equal('Budget Item: dogfood');
    expect(cost).to.equal('Cost: $300');
    expect(time).to.equal('Time: 01/10, 12:35 am');
  });

  it('should render the remaining budget correctly', () => {
    const fakeArray = [{ uid: '3452452543', budgetItem: 'dogfood', itemValue: 300, itemTime: "01/10, 12:35 am" }];
    const fakeIncome = [{ firebaseId: "-Ka6IY_SQphMgLowu7eI", key: 0, monthlyIncome: "5000" }]
    const wrapper = shallow(<RightSide loadArray={fakeArray} monthlyIncome={fakeIncome}/>)
    const remainingBudget = wrapper.find('td').at(3).text();
    expect(remainingBudget).to.equal('REMAINING BUDGET: $4700');
  });

  it('should render a PieChart component', () => {
    const fakeArray = [{ budgetItem: 'dogfood', firebaseId: '-Ka6IY_N1JYoFGp-QVwK', itemTime: "01/10, 12:35 am", itemValue: "20" }];
    const fakeIncome = [{ firebaseId: "-Ka6IY_SQphMgLowu7eI", key: 0, monthlyIncome: "5000" }]
    const wrapper = shallow(<RightSide loadArray={fakeArray} monthlyIncome={fakeIncome}/>)
    expect(wrapper.find('PieChart')).to.have.length(1);
  });

  it('should render the pie chart with correct values', () => {
    const fakeArray = [{ uid: '3452452543', budgetItem: 'dogfood', itemValue: 300, itemTime: "01/10, 12:35 am" }];
    const fakeIncome = [{ firebaseId: "-Ka6IY_SQphMgLowu7eI", key: 0, monthlyIncome: "5000" }]
    const wrapper = shallow(<RightSide loadArray={fakeArray} monthlyIncome={fakeIncome}/>)
    const pieSlices = wrapper.find('PieChart').props().slices;
    expect(pieSlices[0]).to.deep.equal({ color: '#f00', value: 300 });      expect(pieSlices[1]).to.deep.equal({ color: '#0f0', value: 5000 });
  });


});
