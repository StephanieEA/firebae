import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Header from './Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      budgets: [],
    };
  }

  render() {
    return (
      <div className='application'>
        <Header />
        <RightSide />
        <LeftSide />
      </div>
    );
  }
}
