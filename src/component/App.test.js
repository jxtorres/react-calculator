import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import chai from "chai";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("Simulating 3 + 3 = 6", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  document.body.appendChild(div);
  console.log(document.getElementsByTagName("button"));

  Array.from(document.getElementsByTagName("button")).filter(btn => btn.innerHTML=="3")[0].click();
  Array.from(document.getElementsByTagName("button")).filter(btn => btn.innerHTML=="+")[0].click();
  Array.from(document.getElementsByTagName("button")).filter(btn => btn.innerHTML=="3")[0].click();
  Array.from(document.getElementsByTagName("button")).filter(btn => btn.innerHTML=="=")[0].click();
  
  let displayText = document.getElementsByClassName("component-display")[0].children[0].innerHTML;
  
  chai.expect(displayText).to.equals("6");


});



it("Simulating 6 + 6 = 12", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  document.body.appendChild(div);
  console.log(document.getElementsByTagName("button"));

  Array.from(document.getElementsByTagName("button")).filter(btn => btn.innerHTML=="6")[0].click();
  Array.from(document.getElementsByTagName("button")).filter(btn => btn.innerHTML=="+")[0].click();
  Array.from(document.getElementsByTagName("button")).filter(btn => btn.innerHTML=="6")[0].click();
  Array.from(document.getElementsByTagName("button")).filter(btn => btn.innerHTML=="=")[0].click();
  
  let displayText = document.getElementsByClassName("component-display")[0].children[0].innerHTML;
  
  chai.expect(displayText).to.equals("12");


});

