const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
	require("./features/icecream/icecreamSlice").icecreamActions;
const fetchRocket = require("./features/rocket/rocketSlice").fetchRockets;

// Log the initial state of the Redux store
console.log("Initial State:", store.getState());

// Subscribe to store changes and log the updated state.
// This will show the state after each action, including the pending, fulfilled,
// and rejected states of asynchronous thunks (like fetchUsers and fetchRockets).
const unsubscribe = store.subscribe(() => {
	console.log("UPDATED STATE:", store.getState());
});

// Dispatch asynchronous actions to fetch user and rocket data.
// The state will be updated once the data is fetched successfully,
// and the 'subscribe' callback will log these updates.
store.dispatch(fetchUsers());
store.dispatch(fetchRocket());

// You can uncomment the following lines to see how the state changes
// with synchronous actions as well.
// console.log("Day Started");
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(2));
// store.dispatch(cakeActions.ordered(4));
// store.dispatch(cakeActions.ordered(4));
// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(icecreamActions.ordered(4));
// store.dispatch(icecreamActions.ordered(4));
// store.dispatch(icecreamActions.ordered(4));
// store.dispatch(icecreamActions.ordered(4));
// store.dispatch(icecreamActions.restocked(10));
// store.dispatch(cakeActions.restocked(10));
// console.log("Day End");

// In a real application, you would typically unsubscribe when a component unmounts
// or when the application is shutting down to prevent memory leaks.
// For this example, we can unsubscribe after a short delay to ensure async actions complete.
// setTimeout(() => {
// 	unsubscribe();
// }, 5000); // Unsubscribe after 5 seconds (adjust as needed)
