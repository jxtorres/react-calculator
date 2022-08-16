import React from "react";
import PropTypes from "prop-types";
import Display from "./Display.js";

import "./Display.css";
import "./GameDisplay.css";

export default class GameDisplay extends Display {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className={this.props.value == "0" ? "component-green-display" : "component-display"}>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
