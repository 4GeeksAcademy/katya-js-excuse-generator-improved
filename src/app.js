/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excuseGenerator = () => {
    let who = [
      "Your grandmother",
      "My boyfriend",
      "A two-headed racoon",
      "A random lady",
      "A medical professional",
      "Trump",
      "Inspector Gadget",
      "Thanos",
      "300 cows",
      "That dirty pig"
    ];

    let action = [
      "annihilated",
      "messed up",
      "spoiled",
      "disintegrated",
      "ruined",
      "crushed",
      "demolished",
      "bombed",
      "burned",
      "destroyed"
    ];

    let what = [
      "my house",
      "the keys",
      "the car",
      "the server",
      "all the transport",
      "my will to live",
      "my phone",
      "the computer",
      "my legs",
      "the city"
    ];

    let when = [
      "on my way home",
      "right on time",
      "while I was napping",
      "before I could do anything",
      "when I was leaving my house",
      "during the lunch break",
      "before work",
      "right before the presentation",
      "after I finished",
      "when I was peeing"
    ];

    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRandom = action[Math.floor(Math.random() * action.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * when.length)];

    return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;
  };
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
