/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generadorExcusas();
};

let generadorExcusas = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoAns = Math.floor(Math.random() * who.length);
  let actionAns = Math.floor(Math.random() * action.length);
  let whatAns = Math.floor(Math.random() * what.length);
  let whenAns = Math.floor(Math.random() * when.length);

  return (
    who[whoAns] +
    " " +
    action[actionAns] +
    " " +
    what[whatAns] +
    " " +
    when[whenAns]
  );
};
