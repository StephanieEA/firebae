import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Header from './Header';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      budgets: [],
    };
  }

  render() {
    return (
      <div className="Application">
        <Header />
      </div>
    );
  }
}
