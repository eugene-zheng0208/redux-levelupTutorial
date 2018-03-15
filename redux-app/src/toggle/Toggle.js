/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';

const Toggle = ( { messageVisibility, toggleMessage } ) => (
	<div>
		{ messageVisibility &&
			<p>Redux Toggle is ON!</p>
		}
		<button onClick={ toggleMessage }>Toggle Me!</button>
	</div>
);

const mapStateToProps = state => ( {
	messageVisibility: state.toggle.messageVisibility, // You can see this path in the State tab of Redux DevTools
} );

const mapDispatchToProps = dispatch => bindActionCreators( {
	toggleMessage,
}, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Toggle );
