const redux = require("redux");
const produce = require('immer').produce;

const createStore = redux.legacy_createStore;

const initialState = {
	name: "Rias Gremory",
	age: 18,
	designation: "President",
	address: {
		street: "123F, Sapporo",
		city: "Delhi",
		state: "Kyoto",
	},
};

//action type
const STREET_UPDATE = "STREET_UPDATE"

// /action function
const updateStreet = (street)=>{
    return {
        type:STREET_UPDATE,
        payload:street,
    }
}

//reducer
//here we have to maintain the states of nested objects
//this can create hassle and it is not easy to maintain for huge number of state
//hence to solev the issue we use a library caller immer
const reducer= (state = initialState,action)=>{
    switch(action.type){
        case STREET_UPDATE:
            //old updation
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street : action.payload
            //     }
            // }

            //updation with immer
            return produce(state,(draft)=>{
                draft.address.street = action.payload
            })
        default:
            return state
    }
}

//store
const store = createStore(reducer)


console.log("initial State:", store.getState());


const unsubscribe = store.subscribe(() =>
	console.log("Updated State:", store.getState())
);

store.dispatch(updateStreet("XYZALPHA, Heaven Street"))

unsubscribe()

console.log("Final State:", store.getState());


