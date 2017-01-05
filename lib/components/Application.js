import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { Router, Route, Link, browserHistory } from 'react-router'
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
      <div className='application'>
        <Header user={this.state.user}/>
        { !this.state.user && <Login  authorize={signIn}
        setUser= { (userFromFireBase) => { this.setState({ user: userFromFireBase.user }); } }
        text="login"
        /> }
        { (this.state.user && !this.state.setup) && <div><AccountSetup submit={this.setupComplete.bind(this)} /></div> }
        { this.state.setup && <div><RightSide /><LeftSide /></div> }
        <Footer />
      </div>
    );
  }
}

<Router history={browserHistory}>
<Router path="/" component={Root}>
  <Route path="/login" component={Login} />
  <Route path="/accountsetup" component={AccountSetup} />
</Router>
