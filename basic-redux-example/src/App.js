/** @format */

import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={ logo } className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;

// Default State
const defaultState = {
	welcome: 'Hi',
	otherState: 'Some stuff',
};

// Reducers
// const greeting = () => 'Bonjour!';
// const greeting = () => ( { welcome: 'Bonjour!' } );
const greeting = ( state = defaultState, action ) => {
	// if State is passed into greeting, use that State, otherwise use defaultState.
	switch ( action.type ) {
		case 'GREET_EN':
			return { ...state, welcome: 'Hello, Arthur!' };
		case 'GREET_FR':
			return { ...state, welcome: 'Bonjour, Le Artúr!' };
		case 'GREET_NAME':
			return { ...state, welcome: `Hello ${ action.name }` };
		default:
			return state; // If not an action relevant to this Reducer, simply return the current State
	}
};

// Store
// We're only passing one single Reducer right now. In an Application with many Reducers, we use combineReducers to
// pass them all in to the store.
const store = createStore( greeting );
// This will create a store with just one string as the state tree,
// in addition to the default methods that come with Redux.

const name = 'Jim';

// Dispatch an Action
store.dispatch( {
	type: 'GREET_FR',
} );

// Dispatch an action with Payload data
store.dispatch( {
	type: 'GREET_NAME',
	// Pass API data as payload. Can also explicitly write this out as `payload: {}`.
	// Then, inside of Reducer, you can accesss this data via `action.result`
	name, // same as name: name (ES6)
} );
// Dispatch an action with NEW Payload data
store.dispatch( {
	type: 'GREET_NAME',
	name: 'Fredrico',
} );

console.log( store ); // Object w/ all of Redux methods
// console.log( store.getState() ); // String 'Bonjour!' - current state.
console.log( store.getState() ); // Objedt { welcome: 'Bonjour!' } - current state.
