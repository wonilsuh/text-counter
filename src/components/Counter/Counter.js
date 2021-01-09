import React from "react";

import "./Counter.scss";

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <div className="counter-label">{this.props.label}</div>
        <div className="counter-value">{this.props.value}</div>
      </div>
    );
  }
}

export default Counter;
