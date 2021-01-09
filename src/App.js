import React from "react";

import {
  Header,
  HeaderName
} from "carbon-components-react/lib/components/UIShell";

import "./styles.css";

import Counters from "./components/Counters/Counters.js";
import Inputs from "./components/Inputs/Inputs.js";
import { Button } from "carbon-components-react";

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

    var wordCount = text.trim().split(/\s+/).length;
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
        <div className="app-header-wrap">
          <Header aria-label="Counter">
            <HeaderName href="#" prefix="">
              Text Counter
            </HeaderName>
          </Header>
        </div>
        <Counters
          wordCount={this.state.wordCount}
          charCount={this.state.charCount}
          charNoSpaceCount={this.state.charNoSpaceCount}
        />
        <Inputs text={this.state.text} onValueChange={this.onInputChange} />
        <div className="footer">
          <div>@wonilsuh</div>
        </div>
      </div>
    );
  }
}

export default App;
