import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Match, HashRouter } from 'react-router';
import { pick, map, extend } from 'lodash';
import moment from 'moment';
import firebase, { reference, signIn } from '../firebase';
import Header from './Header';
import RightSide from './RightSide';
import Login from './Login';
import AccountSetup from './AccountSetup';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      loadArray: [],
      monthlyIncome: null,
      budgets: {
        draftBudgetItem: '',
        draftItemValue: '',
        itemTime: moment(Date.now()).format('MM/D, h:mm a'),
      },
      user: null,
      draftMonthly: '',
    };
  }

  setDatabaseRef() {
    firebase.database().ref(`users/${this.state.user.uid}/budgets`).on('value', (snapshot) => {
      const itemsFromFirebase = this.createArrayFromFB(snapshot.val());
      this.setState({
        loadArray: map(itemsFromFirebase, (val, key) => extend(val, { key })),
      })
    })
    firebase.database().ref(`users/${this.state.user.uid}/monthlyIncome`).on('value', (snapshot) => {
      const incomeFirebase = this.createArrayFromFB(snapshot.val());
      this.setState({
        monthlyIncome: map(incomeFirebase, (val, key) => extend(val, { key })),
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
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user })
      this.setDatabaseRef()
    })
  }

  updateMonthly(e) {
    this.setState({ draftMonthly: e.target.value })
  }

  updateValue(e, key) {
    e.preventDefault()
    const budgets = this.state.budgets
    budgets[key] = e.target.value
    this.setState({ budgets })
  }

  submission(e, key) {
    const itemValue = this.state.budgets.draftItemValue
    const itemTime = this.state.budgets.itemTime
    const budgetItem = this.state.budgets.draftBudgetItem
    const monthlyIncome = this.state.draftMonthly
    const budgets = this.state.budgets
    firebase.database().ref(`users/${this.state.user.uid}/budgets/`).push({ itemValue, itemTime, budgetItem })
    firebase.database().ref(`users/${this.state.user.uid}/monthlyIncome`).push({ monthlyIncome })
    this.setState({ budgets: { draftBudgetItem: '', draftItemValue: '', itemTime: moment(Date.now()).format('MM/D, h:mm a') } })
  }

  render() {
    return (
      <HashRouter basename="/public">
      <div className='application'>
        <Header user={this.state.user} />
        <Match
        exactly pattern="/"
        render={ () => (
        <Login
        authorize={this.theSignin.bind(this)}
        user={this.state.user}
        text="login"
        />)}/>
        <Match exactly pattern="/setup" render={ () => (<AccountSetup
          user={this.state.user}
          itemValue={this.state.budgets.draftItemValue}
          budgetItem={this.state.budgets.draftBudgetItem}
          updateValue={this.updateValue.bind(this)}
          updateMonthly={this.updateMonthly.bind(this)}
          submission={this.submission.bind(this)}
         />)}/>
         <Match exactly pattern="/budgets" render={ () => (<RightSide
           user={this.state.user}
           budgetItem={this.state.draftBudgetItem}
           authorize={this.theSignin.bind(this)}
           itemValue={this.state.draftItemValue}
           loadArray={this.state.loadArray}
           monthlyIncome={this.state.monthlyIncome}
          />)}/>
      </div>
      </HashRouter>
    );
  }
}
