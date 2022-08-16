import React from "react";
import Display from "./Display";
import GameDisplay from "./GameDisplay";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/gameCalculate";
import "./IosAlert.css";
import PropTypes from "prop-types";

export default class IosAlert extends React.Component {
    static propTypes = {
        hidden: PropTypes.bool,
        message: PropTypes.string,
    };



  state = {
      hidden: false,
  
  };

  flag = false;

  handleClick = buttonName => {
    
  };

  setHidden4 = () => {
    this.state.hidden = true;
    this.setState({});


  };

  render() {
    if(this.props.hidden)
        this.state.hidden = this.props.hidden;



    if(this.state.hidden == false){
        return (

            <div class="alert"> 
                <div class="alertBase">
                    <div class="inner"> 
                        <div class="title">{this.props.message}</div> 
                        <div class="text">Try again, click AC.</div> 
                    </div> 
                    <div class="button" onClick={this.setHidden4}>OK</div> 
                </div> 
            </div>

        );
    }
    else {
        //Clear this one time use flag in the state
        this.state.hidden = false;

        return null;
    }
  }
}
