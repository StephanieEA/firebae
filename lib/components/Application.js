import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Match } from 'react-router';
import { pick, map, extend } from 'lodash';
import moment from 'moment';
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
      loadArray: [],
      budgets: {
        draftBudgetItem: '',
        draftItemValue: '',
        itemTime: moment(Date.now()).format('MM/D, h:mm a'),
      },
      user: null,
      draftMonthly: '',
    };
  }

  componentDidMount() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   this.setState({ user });
    //   this.setDatabaseRef();
    // });
 }

  setDatabaseRef() {
    firebase.database().ref(`users/${this.state.user.uid}/budgets`).on('value', (snapshot) => {
      console.log(snapshot.val())
      const itemsFromFirebase = this.createArrayFromFB(snapshot.val());
      this.setState({
        loadArray: itemsFromFirebase,
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
    const budgets = this.state.budgets
    firebase.database().ref(`users/${this.state.user.uid}/budgets/${budgets.draftBudgetItem}`).push({ itemValue, itemTime })
    this.setState({ budgets : { draftBudgetItem: '', draftItemValue: '', itemTime: moment(Date.now()).format('MM/D, h:mm a') } })
  }

  // resubmission(e) {
  //   firebase.database().ref(`users/${this.state.user.uid}/${budget.id}/userBudget`).set({ user: pick(this.state.user, 'displayName', 'email', 'uid', 'photoURL', 'contactID'),
  //     monthlyIncome: this.state.draftMonthly,
  //     createdAt: Date.now(),
  //   })
  // }

  render() {
    return (
      <BrowserRouter>
      <div className='application'>
        <Header user={this.state.user} />
        <Match
        exactly pattern="/public/"
        render={ () => (
        <Login
        authorize={this.theSignin.bind(this)}
        user={this.state.user}
        setUser= { (userFromFireBase) => {
          this.setState({ user: userFromFireBase.user });
        } }
        text="login"
        />)}/>
        <Match exactly pattern="/public/setup" render={ () => (<AccountSetup
          user={this.state.user}
          keys={this.state.fbkeys}
          itemValue={this.state.draftItemValue}
          budgetItem={this.state.draftBudgetItem}
          updateValue={this.updateValue.bind(this)}
          // updateItem={this.updateItem.bind(this)}
          updateMonthly={this.updateMonthly.bind(this)}
          submission={this.submission.bind(this)}
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
