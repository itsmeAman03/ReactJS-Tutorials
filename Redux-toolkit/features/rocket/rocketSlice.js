const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const ROCKET_URL = "https://api.spacexdata.com/v3/rockets";

const fetchRockets = createAsyncThunk("rockets/fetchRockets", async () => {
	const response = await axios.get(ROCKET_URL);

	return response.data;
});

const initialState = {
	rockets: [],
	status: "idle",
	error: null,
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
			})
			.addCase(fetchRockets.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

module.exports = rocketsSlice;
module.exports.fetchRockets = fetchRockets;
