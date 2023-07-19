import { Score } from "./Score";

const score = new Score();

export function clickEvent() {
  const element = document.body;
  element.addEventListener("click", (event) => {
    if (event.target === element.querySelector("img")) {
      event.target.remove();
      if (score.score > 1) {
        score.updateScore();
      } else {
        score.printScore();
      }
    }
  });
}

export function negativClick() {
  if (document.querySelector("img")) {
    score.failCounter();
  }
  if (score.failScore === 5) {
    document.body.innerHTML = "Game Over";
    return true;
  }
}
