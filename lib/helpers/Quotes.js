import React from 'react';

const quoteArray = ['We were using $50 bills as toilet paper and toilet paper as dog toilet paper.',
  'Eternal happiness for one dollar eh? Hmmm… I./’d be happier with the dollar.',
  'I’ve spent my entire life doing nothing but collecting comic books… and now there’s only time to say… LIFE WELL SPENT!']

  const userific = (authorize, user, setUser) => {
    authorize().then(fromFirebase => setUser(fromFirebase))
    firebase.database().ref('budgets/').push({ user: user })
  }

module.exports = { quoteArray, userific };
