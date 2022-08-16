import React from "react";
import Display from "./Display";
import GameDisplay from "./GameDisplay";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/gameCalculate";
import "./App.css";
import IosAlert from "./IosAlert";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    isDisplayingError: false,
  };


  handleClick = buttonName => {
    this.state.clicks = this.state.clicks ? this.state.clicks + 1: 1;
    if(buttonName == "AC"){
      this.state.clicks = 0;
      this.state.mostRecentMessage = "";
    }
    this.setState(calculate(this.state, buttonName));
    //Calling setState will not actually modify the state or run the caclulcate method pointer
    //State will be modified later in the render loop before render() is invoked.
    //Render Loop will iterate at some time in near future.
   
  };

  render() {
    // Special Render State on a value of zero.
    if(this.state.next == 0 && this.state.mostRecentMessage==""){
      this.state.isDisplayingError = true;
      this.state.mostRecentMessage = "Congrats on finishing in " + this.state.clicks + " clicks!"
    }
    //Set Flags for Alert rendering
    let renderAlert = this.state.isDisplayingError;

    //Clear one-time use flags
    this.state.isDisplayingError = false;
   
    
    return (
      <div className="component-app">
        
        <IosAlert message={this.state.mostRecentMessage} hidden={(renderAlert == false) ? true : false} />
        <GameDisplay value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
