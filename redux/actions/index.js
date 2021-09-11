import ActionTypes from "../constants";

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

export const createPost = (data) => {
	return {
		type: ActionTypes.CREATE_POST,
		payload: data,
	};
};

export const updatePost = (data) => {
	return {
		type: ActionTypes.UPDATE_POST,
		payload: data,
	};
};

export const getAllPosts = (data) => {
	return {
		type: ActionTypes.GET_ALL_POSTS,
		payload: data,
	};
};
