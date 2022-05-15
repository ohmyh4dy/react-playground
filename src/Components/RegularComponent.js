import { Component } from "react";

export default class RegularComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reg: "reg0",
    };
  }

  componentDidMount() {
    this.setState(() => ({
      reg: "reg0",
    }));
  }
  render() {
    console.log("render reg");
    return (
      <div>
        <p>RegularComponent</p>
      </div>
    );
  }
}
