import React from "react";
import AutoFocusTextInput from "./Components/AutoFocusTextInput";
import ClickCounter from "./Components/ClickCounter";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import ComponentC from "./Components/ComponentC";
import Counter from "./Components/Counter";
import FocusInput from "./Components/FocusInput";
import FRParentInput from "./Components/FRParentInput";
import HoverCounter from "./Components/HoverCounter";
import HoverCounterTwo from "./Components/HoverCounterTwo";
import LifeCycle from "./Components/LifeCycle";
import ParentComponent from "./Components/ParentComponent";
import CustomTextInput from "./Components/RefsDemo";
import User from "./Components/User";
import { UserProvider } from "./Components/userContext";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <LifeCycle /> */}
        {/* <ParentComponent /> */}
        {/* <ClickCounter name="Ahmed" />
        <br />
        <HoverCounter /> */}
        {/* <ClickCounterTwo />
        <br />
        <HoverCounterTwo />
        <br /> */}
        {/* <User render={(isLoggedIn) => (isLoggedIn ? "Ahmed" : "Guest")} /> */}
        {/* <Counter>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter> */}
        <UserProvider value="ohmyh4dy">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

/**
 * Each component has several lifecycle methods that you can override to run
 * some code at a specific time.
 *
 * There are 3 stages [Mounting, Updating, Unmounting].
 *
 * 1- Mounting [The first stage of the lifecycle - Instance of your component is being created and inserted into the DOM]
 *    [Constructor, getDerivedStateFromProps, render, componentDidMount]
 *
 * 2- Updating [changes to state, props, re-rendered]
 *  [getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate]
 *
 * 3- Unmounting [Component is being removed from the DOM]
 *  [componentWillUnMount]
 *
 * 4- Error Handling [Error during the rendering or in the constructor of any child.]
 *  [getDerivedStateFromError, componentDidCatch]
 */
