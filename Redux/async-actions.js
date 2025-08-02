const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const { createStore, applyMiddleware } = redux;

// Initial State
const initialState = {
	loading: false,
	users: [],
	error: "",
};

// Action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// Action creators
const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchUsersSucceeded = (users) => ({
	type: FETCH_USERS_SUCCEEDED,
	payload: users,
});
const fetchUsersFailed = (error) => ({
	type: FETCH_USERS_FAILED,
	payload: error,
});

// Reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return { ...state, loading: true };
		case FETCH_USERS_SUCCEEDED:
			return { loading: false, users: action.payload, error: "" };
		case FETCH_USERS_FAILED:
			return { loading: false, users: [], error: action.payload };
		default:
			return state;
	}
};

// Async action creator
const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				const userIds = res.data.map((user) => user.id);
				dispatch(fetchUsersSucceeded(userIds));
			})
			.catch((err) => {
				dispatch(fetchUsersFailed(err.message));
			});
	};
};

// Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
	console.log("Updated State:", store.getState());
});

store.dispatch(fetchUsers());
