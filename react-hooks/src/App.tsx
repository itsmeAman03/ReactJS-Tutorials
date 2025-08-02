import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Imports
import ClassCounter from "./componets/ClassCounter";
import HookCounter from "./componets/HookCounter";
import Hookcountertwo from "./componets/Hookcountertwo";
import Hookcounterthree from "./componets/Hookcounterthree";
import HookCounterfour from "./componets/HookCounterfour";
import ClassCounterOne from "./componets/effect-hook/ClassCounter";
import Hookcounterone from "./componets/effect-hook/Hookcounterone";
import ClassMouse from "./componets/effect-hook/ClassMouse";
import HookMouse from "./componets/effect-hook/HookMouse";
import MouseContainer from "./componets/effect-hook/MouseContainer";
import IntervalClassCounter from "./componets/effect-hook/IntervalClassCounter";
import IntervalHookCounter from "./componets/effect-hook/IntervalHookCounter";
import DataFetch from "./componets/fetch-hook/DataFetch";
import ComponentD from "./componets/context-hook/ComponentD";
import React, { useReducer } from "react";
import ComponentE from "./componets/context-hook/ComponentE";
// import CounterOne from './componets/reduce-hook/CounterOne';
// import CounterTwo from './componets/reduce-hook/CounterTwo';
import CounterThree from "./componets/reduce-hook/CounterThree";
import ComponentA from "./componets/reduce-hook/comp/ComponentA";
import ComponentB from "./componets/reduce-hook/comp/ComponentB";
import ComponentC from "./componets/reduce-hook/comp/ComponentC";
import DataFetching from "./componets/reduce-hook/DataFetching";
import DataFetchingtwo from "./componets/reduce-hook/DataFetchingtwo";
import ParenetComponent from "./componets/callback-hook/ParentComponent";
import Counter from "./componets/memo-hook/memocounter";
import FocusInput from "./componets/useref-hook/FocusInput";
import ClassTimer from "./componets/useref-hook/ClassTimer";
import HookTimer from "./componets/useref-hook/HookTimer";
import DocTitleOne from "./componets/CustomHook/DocTitleOne";
import DocTitleTwo from "./componets/CustomHook/DocTitleTwo";
import CounterOne from "./componets/CustomHook/CounterOne";
import CounterTwo from "./componets/CustomHook/CounterTwo";
import UserForm from "./componets/CustomHook/UserForm";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="App">
			{/* Custom hook */}
			{/* <UserForm /> */}
			{/* <CounterTwo />
      <CounterOne /> */}
			{/* <DocTitleTwo /> */}
			{/* <DocTitleOne /> */}

			{/* useref hook */}
			{/* <HookTimer /> */}
			{/* <ClassTimer /> */}
			{/* <FocusInput /> */}

			{/* /memo hook  */}
			{/* <Counter /> */}

			{/* callback  */}
			{/* <ParenetComponent /> */}

			{/* Datafetching with useReducer */}
			{/* <DataFetchingtwo /> */}
			{/* <DataFetching /> */}

			{/* <CountContext.Provider
				value={{ countState: count, countDispatch: dispatch }}
			> */}
			{/* useReduce with useContext */}
			{/* <div className="App">
					Count - {count}
					<ComponentA />
					<ComponentB />
					<ComponentC />
				</div>
			</CountContext.Provider> */}

			{/* useReduce  */}
			{/* <CounterThree /> */}
			{/* <CounterTwo /> */}
			{/* <CounterOne /> */}

			{/* useContext  Hook */}
			{/* <UserContext.Provider value={"Aman"}>
				<ChannelContext.Provider value={"React"}>
					<ComponentD />
				</ChannelContext.Provider>
			</UserContext.Provider> */}

			{/* Fetching Data with useEffect */}
			{/* <DataFetch /> */}

			{/* useEffect with incorrect dependency */}
			{/* <IntervalHookCounter />
       <IntervalClassCounter /> */}

			{/* run ueEffect only once */}
			{/* <MouseContainer /> */}
			{/* <HookMouse /> */}
			{/* <ClassMouse /> */}

			{/* Run use effect when render */}
			{/* <Hookcounterone /> */}
			{/* <ClassCounterOne /> */}

			{/* useState with array */}
			{/* <HookCounterfour /> */}

			{/* usestate with object */}
			{/* <Hookcounterthree /> */}

			{/* <Hookcountertwo /> */}
			{/* <HookCounter />
       <ClassCounter /> */}
		</div>
	);
}

export default App;
