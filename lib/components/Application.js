import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Header from './Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Footer from './Footer';
import Login from './Login';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      budgets: [],
      user: null,
    };
  }

  render() {
    return (
      <div className='application'>
        <Login  authorize={signIn}
                setUser= { (userFromFireBase) => { this.setState({ user: userFromFireBase.user }); } }
                text="login" />
        <Header />
        <RightSide />
        <LeftSide />
        <Footer />
      </div>
    );
  }
}
