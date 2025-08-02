const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");
const rocketReducer = require("../features/rocket/rocketSlice");

// const logger = require('redux-logger').logger

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		user: userReducer.reducer,
		rocket: rocketReducer.reducer,
	},
	// Removed redux-logger middleware
	// middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
});
module.exports = store;
