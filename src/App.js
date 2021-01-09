import React from "react";

// import {
//   Header,
//   HeaderName
// } from "carbon-components-react/lib/components/UIShell";

import "./App.scss";

import Counters from "./components/Counters/Counters.js";
import Inputs from "./components/Inputs/Inputs.js";

const wordCountFunc = (str) =>
  str.split(" ").filter(function (n) {
    return n !== "";
  }).length;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      wordCount: 0,
      charCount: 0,
      charNoSpaceCount: 0
    };
  }

  onInputChange(e) {
    var text = e.target.value;

    var wordCount = wordCountFunc(text);
    var charCount = text.length;
    var charNoSpaceCount = text.replace(/ /g, "").length;

    this.setState({
      text,
      wordCount,
      charCount,
      charNoSpaceCount
    });
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-header-wrap">Text counter</div>
        <Counters
          wordCount={this.state.wordCount}
          charCount={this.state.charCount}
          charNoSpaceCount={this.state.charNoSpaceCount}
        />
        <Inputs text={this.state.text} onValueChange={this.onInputChange} />
        <div className="footer">
          <div className="inner-wrap">
            <div className="element">@wonilsuh</div>
            <div className="element">
              <a
                href="https://github.com/wonilsuh/text-counter"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
