import React, { Component } from "react";

export default class PureComponent extends React.PureComponent {
  /**
   *
   * shouldCOmponentUpdate() Shallow comparison between prop, state
   */
  constructor(props) {
    super(props);

    this.state = {
      pure: "pure0",
    };
  }

  componentDidMount() {
    this.setState(() => ({
      pure: "pure0",
    }));
  }
  render() {
    console.log("render pure");
    return (
      <div>
        <p>PureComponent</p>
      </div>
    );
  }
}
