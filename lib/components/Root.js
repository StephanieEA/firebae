import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { Router, Route, Link, browserHistory } from 'react-router'
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import AccountSetup from './AccountSetup';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      budgets: [],
      user: null,
      setup: false,
    };
  }

  componentDidMount() {
    firebase.database().ref('budgets').on('value', (snapshot) => {
      const itemsFromFirebase = this.createArrayFromFB(snapshot.val());
      this.setState({
        budgets: itemsFromFirebase,
    })
  })
}

createArrayFromFB(object) {
    const firebaseKeys = object ? Object.keys(object) : [];
    return firebaseKeys.map((key) => {
      const singleMessage = object[key];
      singleMessage['firebaseId'] = key;
      return singleMessage;
    });
}

  theSignin() {
    signIn();
  }

  setupComplete() {
    this.setState({ setup: true })
  }

  render() {
    return (
      <div className='root'>
        <Header user={this.state.user}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
