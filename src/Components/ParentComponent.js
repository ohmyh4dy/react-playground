import { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComponent from "./PureComponent";

export default class ParentComponent extends Component {
  render() {
    return (
      <div>
        <p>ParentComponent</p>
        <PureComponent />
        <RegularComponent />
      </div>
    );
  }
}
