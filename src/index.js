import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  const app = new Application();
  app.setEmojis(["🐒", "🦍", "🦧"]);
  const monkeyArr = [];
  app.addBananas(monkeyArr);

  const myDiv = document.getElementById("emojis");
  const myP = document.createElement("p");
  myP.textContent = monkeyArr;
  myDiv.appendChild(myP);
  window.__JS_APP = app;
});
