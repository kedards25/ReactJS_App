import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: "false"
    };
  }

  render() {
    return <h1>Hello World {this.state.openDrawer}</h1>;
  }
}

export default Counter;
