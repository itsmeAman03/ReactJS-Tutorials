import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	numOfCake: 20,
};
const cakeSlice = createSlice({
	name: "cake",
	initialState: initialState,
	reducers: {
		ordered: (state) => {
			state.numOfCake -= 1;
		},
		restocked: (state, action) => {
			state.numOfCake += action.payload;
		},
	},
});

export default cakeSlice.reducer
export const {ordered , restocked} = cakeSlice.actions

