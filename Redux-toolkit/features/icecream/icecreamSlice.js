const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
	numOfIcecream: 30,
};
const icecreamSlice = createSlice({
	name: "icecream",
	initialState: initialState,
	reducers: {
		ordered: (state, action) => {
			state.numOfIcecream -= action.payload;
		},
		restocked: (state, action) => {
			state.numOfIcecream += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(cakeActions.ordered, (state) => {
			state.numOfIcecream--;
		});
	},
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
