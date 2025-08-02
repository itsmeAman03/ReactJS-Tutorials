const redux = require("redux");
const reduxlogger = require("redux-logger");

const bindActionCreater = redux.bindActionCreators;
const combineReducer = redux.combineReducers;
//logger middleware
const logger = reduxlogger.createLogger();

const applyMiddleware = redux.applyMiddleware;
//Creating the statestore
//createStore is deprecated instead use configureStore from @redux/toolkit

const createStore = redux.createStore;

//Redux Action :
/*
The only way your application can interact with the store
Carry some information from your app to redux store 
Plain JS object 
Have a 'type' proprty that describes something that happened in the application 

The 'type' property is ty[icallly defined as string constants
*/
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//this is an action creater function
function orderCake(qnty = 1) {
	//this is action : an object with type propertry
	return {
		type: CAKE_ORDERED,
		payload: qnty,
	};
}
function restockedCake(qnty = 1) {
	//this is action : an object with type propertry
	return {
		type: CAKE_RESTOCKED,
		payload: qnty,
	};
}

//this is an action creater function
function orderIceCream(qnty = 1) {
	//this is action : an object with type propertry
	return {
		type: ICECREAM_ORDERED,
		payload: qnty,
	};
}
function restockedIceCream(qnty = 1) {
	//this is action : an object with type propertry
	return {
		type: ICECREAM_RESTOCKED,
		payload: qnty,
	};
}

// Redux Reducer
/*
Specify how the app's state changes in response to action sent to the store
fFunction that accepts state and action as arguments , and return the next state of application

(previousState,action) => newState

*/
const initialCakeState = {
	numberOfCakes: 10,
};
const initialIceCreamState = {
	numberOfIceCream: 22,
};

//When working the multiple states variable
// you make different reducer for each
//why?
// it makes earier to keep stack of reducer funtion
// very usefull when there are many much more state
// hence we will also try that

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				...state, //wiht this you let the reducer know all the other property will remain same
				numberOfCakes: state.numberOfCakes - action.payload,
			};
		case CAKE_RESTOCKED:
			return {
				...state, //wiht this you let the reducer know all the other property will remain same
				numberOfCakes: state.numberOfCakes + action.payload,
			};
		default:
			return state;
	}
};

//addition reducers
// changes the state of state no associated with it
//here when someone buys cake they get a icecream free

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case ICECREAM_ORDERED:
			return {
				...state, //wiht this you let the reducer know all the other property will remain same
				numberOfIceCream: state.numberOfIceCream - action.payload,
			};
		case ICECREAM_RESTOCKED:
			return {
				...state, //wiht this you let the reducer know all the other property will remain same
				numberOfIceCream: state.numberOfIceCream + action.payload,
			};
		case CAKE_ORDERED:
			return {
				...state,
				numberOfIceCream: state.numberOfIceCream - 1,
			};
		default:
			return state;
	}
};

// Recux Store
/*
    one store for entire application
    Responsibility :
        - Hold Application State
        - Allows access to statte via getState()
        - Allows state to be updated via dispatch(action)
        - Register listner via subscribe(listener)
        - Handles unregistrering of listners via the function returned by subscrbe(listner)

    You use redux library to store the states via createStore()
*/

//combine reducer so you donthave to make multiple store
const rootReducer = combineReducer({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial State:", store.getState());

const unsubscribe = store.subscribe(() => {});

// Day Stared
console.log("DAY STARTED");
//dispating an action for state transition

// instead of doing somethinf like below you can create a actionbinder funtion
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

//action binder funtion
//it takes all the action in objeect and the funtion whuch you want to bind with
const action = bindActionCreater(
	{ orderCake, restockedCake, orderIceCream, restockedIceCream },
	store.dispatch
);

//new way to dispatch order and restock
action.orderCake(3);
action.orderCake();
action.orderCake(1);
action.orderCake();
action.orderCake(2);

action.orderIceCream(11);
action.orderCake();
action.orderIceCream(1);

console.log("DAY ENDED");
console.log("RESTOCKING");

// new way to restock cake
// store.dispatch(restockedCake(20));
action.restockedCake(20);
action.restockedIceCream(10);

console.log("RESTOCKED");

//calling unsubscribe method
//unubscribe must be called after the dispatch,otherwise the changes monitor of state change will never stop
unsubscribe();

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

console.log("Final State:", store.getState());
