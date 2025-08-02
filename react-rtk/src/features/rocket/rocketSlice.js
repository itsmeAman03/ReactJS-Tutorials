import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const ROCKET_URL = "https://api.spacexdata.com/v3/rockets";

export const fetchRockets = createAsyncThunk(
	"rockets/fetchRockets",
	async () => {
		const response = await axios.get(ROCKET_URL);
		return response.data
	}
);

const initialState = {
	rockets: [],
	status: "idle",
	error: "",
};

const rocketsSlice = createSlice({
	name: "rockets",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRockets.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchRockets.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.rockets = action.payload;
				state.error = ""
			})
			.addCase(fetchRockets.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
				state.rockets = [];

			});
	},
});

export default rocketsSlice;

