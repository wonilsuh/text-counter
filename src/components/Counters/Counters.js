import React from "react";

import "./Counters.css";

import Counter from "../Counter/Counter.js";

class Counters extends React.Component {
  render() {
    return (
      <div className="counters">
        <Counter label="Words" value={this.props.wordCount} />
        <Counter label="Characters" value={this.props.charCount} />
        <Counter
          label="Characters, no space"
          value={this.props.charNoSpaceCount}
        />
      </div>
    );
  }
}

export default Counters;
