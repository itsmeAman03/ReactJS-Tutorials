import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
import rocketReducer from "../features/rocket/rocketSlice";
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
export default store;
