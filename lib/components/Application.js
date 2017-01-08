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
      draftMonthly: '',
      draftBudgetItem: '',
      draftItemValue: '',
    };
  }

  componentDidMount() {
    if(this.state.user) {
    reference.ref(this.state.user.uid).on('value', (snapshot) => {
      const itemsFromFirebase = this.createArrayFromFB(snapshot.val());
      this.setState({
        budgets: itemsFromFirebase,
      })
    })
  }
  }

  createArrayFromFB(object) {
    const firebaseKeys = object ? Object.keys(object) : [];
    return firebaseKeys.map((key) => {
      const singleMessage = object[key];
      singleMessage.firebaseId = key;
      this.setState({ fbkeys: this.state.user.uid || [] });
      return singleMessage;
    });
  }

  theSignin() {
    signIn();
  }

  updateMonthly(e) {
    this.setState({ draftMonthly: e.target.value })
  }

  updateValue(e) {
    e.preventDefault()
    this.setState({ draftItemValue: e.target.value })
  }

  updateItem(e) {
    this.setState({ draftBudgetItem: e.target.value })
  }

  render() {
    return (
      <BrowserRouter>
      <div className='application'>
        <Header user={this.state.user} />
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
        <Match exactly pattern="/public/setup" render={ () => (<AccountSetup
          user={this.state.user}
          keys={this.state.fbkeys}
          updateValue={this.updateValue.bind(this)}
          updateItem={this.updateItem.bind(this)}
          updateMonthly={this.updateMonthly.bind(this)}
         />)}/>
         <Match exactly pattern="/public/budgets" render={ () => (<RightSide
           user={this.state.user}
           keys={this.state.fbkeys}
           budgetItem={this.state.draftBudgetItem}
           itemValue={this.state.draftItemValue}
           monthlyIncome={this.state.draftMonthly}
          />)}/>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}
