import React, { Component } from "react";
class Counter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.state);
    setTimeout(() => {
      this.setState({
        value: 5
      });
    }, 3000);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    console.log(prevProps);
  }

  render() {
    return (
      <h1>
        Hello World {this.state.value} {this.props.name}
      </h1>
    );
  }
}

export default Counter2;
