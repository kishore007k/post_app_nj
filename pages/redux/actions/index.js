import { ActionTypes } from "../constants";

export const userSignUp = (data) => {
	return {
		type: ActionTypes.USER_SIGN_UP,
		payload: data,
	};
};

export const userSignIn = (data) => {
	return {
		type: ActionTypes.USER_SIGN_IN,
		payload: data,
	};
};
