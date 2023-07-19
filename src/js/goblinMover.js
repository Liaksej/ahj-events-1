import image from "../img/goblin.png";
import { negativClick } from "./clickEvent.js";

export class GoblinMover {
  constructor(fieldLength) {
    this.fieldLength = fieldLength;
  }

  randomField() {
    return Math.floor(Math.random() * (this.fieldLength * this.fieldLength));
  }

  mover() {
    const goblinElement = document.createElement("img");
    goblinElement.src = image;
    goblinElement.width = 100;
    goblinElement.height = 100;
    const timeoutID = setInterval(() => {
      const negativeClick = negativClick();
      if (negativeClick) {
        clearInterval(timeoutID);
        return;
      }
      let cell = document.querySelector(`.i${this.randomField()}`);
      cell.appendChild(goblinElement);
    }, 1000);
  }
}
