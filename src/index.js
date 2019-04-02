import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { myArray } from "./krArray";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

function tick() {
  const element = (
    <div class="center">
      <div className="time">
        <h1>Hello, user!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
      <div className="phrase">
        <h3>Your phrase of the day is {randomItem}</h3>
      </div>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
