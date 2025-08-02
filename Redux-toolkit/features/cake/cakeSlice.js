const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
	numOfCake: 20,
};
const cakeSlice = createSlice({
	name: "cake",
	initialState: initialState,
	reducers: {
		ordered: (state, action) => {
			state.numOfCake -= action.payload;
		},
		restocked: (state, action) => {
			state.numOfCake += action.payload;
		},
	},
});

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions

