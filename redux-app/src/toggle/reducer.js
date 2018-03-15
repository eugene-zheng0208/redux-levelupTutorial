import { TOGGLE_MESSAGE } from './actions';

const initialState = {
	messageVisibility: false,
};

export default function( state = initialState, action ) {
	const { type, data } = action; // Object destructuring to use action.type as type

	switch ( type ) {
		case TOGGLE_MESSAGE:
			return {
				...state,
				messageVisibility: ! state.messageVisibility,
			};
		default:
			return state;
	}
}