import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Imports
import PostList from "./components/PostList";
import Postform from "./components/Postform";
function App() {
	return (
		<div className="App">
			<Postform />
			{/* <PostList /> */}
		</div>
	);
}

export default App;
