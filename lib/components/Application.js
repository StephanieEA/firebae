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

  render() {
    return (
      <div className='application'>
        <Header />
        { !this.state.user && <Login  authorize={signIn}
        setUser= { (userFromFireBase) => { this.setState({ user: userFromFireBase.user }); } }
        text="login"
        /> }
        { this.state.user && <div><RightSide /><LeftSide /></div> }
        <Footer />
      </div>
    );
  }
}
