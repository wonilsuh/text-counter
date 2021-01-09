import React from "react";

import "./Inputs.scss";

class Inputs extends React.Component {
  constructor(props) {
    console.log("Inputs!");
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("handleChange", e);
    this.setState({
      text: e.target.value
    });
    this.props.onValueChange(e);
  }

  render() {
    return (
      <div className="inputs">
        <textarea
          onChange={this.handleChange}
          placeholder="Enter your text here"
        ></textarea>
      </div>
    );
  }
}

export default Inputs;
