import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var myArray = [
    "Hello/안녕하세요",
    "Nice to meet you/반갑습니다",
    "Thank you/감사합니다",
    "Excuse me/잠시만요",
    "I’m sorry (informal)/죄송합니다",
    "I'm sorry (formal)/미안합니다",
    "Please/주세요",
    "This one/이것",
    "Where is the [x]/[x] 어디예요",
    "Remove/빼주세요",
    "Beer/맥주",
    "Soju/소주",
    "Right/오른",
    "Left/왼",
    "Straight/직진",
    "How much is it?/얼마예요",
    "Give me a discount/깎아주세요",
    "Is there a/있어요",
    "I can’t speak Korean well/한국말 잘 못해요"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <p>Your word of the day is {randomItem}</p>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
