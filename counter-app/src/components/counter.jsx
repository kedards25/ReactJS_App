import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    data: ["data1","data2","data3"]
  };

  styles = {
    fontStyle: "italic"
  };

  renderData() {
    if (this.state.data.length === 0) return <h4 className="alert-danger w-25">No Data</h4>;
    return <ul>
      {this.state.data.map(data => <li key={data}>{data}</li>)}
    </ul>;
  }
  render() {

    //let classes = this.newBadgeMethod();
    return (
      <div>
        <span style={this.styles} className={this.newBadgeMethod()}>
          {this.formatCount()}
        </span>
        {/* {this.state.data.map(data => <li key={data}>{data}</li>)} */}
          {this.renderData()}
        <button className="btn btn-secondary">Add 1</button>
      </div>
    );
  }

  newBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h5>Zero</h5> : count;
  }
}

export default Counter;
