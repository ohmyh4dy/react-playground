import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Ahmed",
    };
    console.log("From inside the constructor.");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("From inside the getDerivedStateFromProps.");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("From inside the shouldComponentUpdate.");
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("From inside the getSnapshotBeforeUpdate.");
    return null;
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("From inside the componentDidUpdate.");
  }

  componentDidMount() {
    console.log("From inside the componentDidMount.");
    this.setState(() => ({
      username: "Mohamed",
    }));
  }

  render() {
    console.log("From inside the render.");
    return <div>LifeCycle</div>;
  }
}
