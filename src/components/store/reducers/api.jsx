import {
	EDIT_PROGRESS,
	BAY_COURSE,
	EDIT_EMAIL,
	EDIT_PASSWORD,
	SIGN_OUT,
	SIGN_IN,
	REGISTRATION,
} from '../actions/types';

const initialState = {
	dataUser: [],
};

export default function apiReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTRATION: {
			const { data } = action.payload;

			return {
				...state,
				dataUser: data,
			};
		}

		case SIGN_IN: {
			const { data } = action.payload;

			return {
				...state,
				dataUser: data,
			};
		}

		default:
			return state;
	}
}
