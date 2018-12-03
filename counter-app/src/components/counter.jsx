import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontStyle: "italic"
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button class="btn btn-secondary">Add 1</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h5>Zero</h5> : count;
  }
}

export default Counter;
