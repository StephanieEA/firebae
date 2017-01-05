import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Match } from 'react-router'
import firebase, { reference, signIn } from '../firebase';
import Header from './Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
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
      singleMessage.firebaseId = key;
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
      <BrowserRouter>
      <div className='application'>
        <Header />
        <Match
        exactly pattern="/public/"
        render={ () => (
        <Login
        authorize={signIn}
        user={this.state.user}
        setUser= { (userFromFireBase) => {
          this.setState({ user: userFromFireBase.user });
        } }
        text="login"
        />)}/>
        <Match exactly pattern="/public/setup" render={ () => (<AccountSetup user={this.state.user} setup={this.state.setup}
       submit={this.setupComplete.bind(this)} />)}/>
        { this.state.setup && <div><RightSide /><LeftSide /></div> }
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}
