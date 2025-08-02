import { useState } from "react";

import "./App.css";

// Imports
import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/stylingcss/Stylesheet";
import Inline from "./components/stylingcss/Inline";
import "./components/stylingcss/appstyle.css";
import styles from "./components/stylingcss/appstyle.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import Purecomponent from "./components/Purecomponent";
import ParentComp from "./components/ParentComp";
import RefDemo from "./components/RefDemo";
import FocusInput from "./components/FocusInput";
import FRInput from "./components/FRInput";
import FRParentInput from "./components/FRParentInput";
import Portaldemo from "./components/Portaldemo";
import Hero from "./components/ErrorHandling/Hero";
import ErrorBoundary from "./components/ErrorHandling/ErrorBoundary";
import ClickCounter from "./components/HigherOrderComponent/CickCounter";
import HoverCounter from "./components/HigherOrderComponent/HoverCounter";
import ClickCountertwo from "./components/HigherOrderComponent/ClickCountertwo";
import HoverCountertwo from "./components/HigherOrderComponent/HoverCounttwo";
import User from "./components/HigherOrderComponent/User";
import COunter from "./components/HigherOrderComponent/COunter";

function App() {

  return (
    <div className="App">
      {/* <COunter
				render={(count, incCount) => (
					<ClickCountertwo count={count} incCount={incCount} />
				)}
			/>
			<COunter
				render={(count, incCount) => (
					<HoverCountertwo count={count} incCount={incCount} />
				)} 
			/> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Aman" : "Guest")} /> */}
      <ClickCountertwo />
      <HoverCountertwo />
      <HoverCounter />
      {/* <ClickCounter /> */}
      {/* <ErrorBoundary>
          <Hero heroname="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname="Supername" />
        </ErrorBoundary>
        <ErrorBoundary >
          <Hero heroname="joker" />
        </ErrorBoundary> */}
      {/* <Portaldemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefDemo /> */}
      {/* <ParentComp /> */}
      {/* <Purecomponent /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}

      {/* using module */}
      {/* <h1 className="error">Error</h1>
			<h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Stylesheet primary={false} /> providing props */}
      {/* <NameList />
			<UserGreeting />
			<ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroname="Batman">
				<p> This is 1st children props</p>
				<p> This is 2nd children props</p>
			</Greet>
			<Greet name="Rocks" heroname="human">
				<button>Action</button>
			</Greet> */}
      {/* <Greet name="Luffy" heroname="straw hat" />
			<Greet name="Zolo" heroname="priate hunter" />
			<Welcome name="Bruce" heroname="Batman" />
			<Welcome name="Rocks" heroname="human" />
			<Welcome name="Luffy" heroname="straw hat" />
			<Welcome name="Zolo" heroname="priate hunter" /> */}
      <Hello />
    </div>
  );
}

export default App;
