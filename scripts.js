import { getQuestion, showQuestion } from "./helpers.js";

const quizWrapper = document.getElementById("quiz-wrapper");

window.onload = () => {
  quizWrapper.innerHTML = '<img src="./loading.gif" alt="">';
};
let question = await getQuestion();

showQuestion(question, quizWrapper);

let optionElements = document.getElementsByClassName("option");

const selectOption = (event) => {
  //     console.log('selectOption')
  //   console.log("selectOption", event.target.innerHTML);
  let result = document.getElementById("result");
  if (event.target.innerHTML === question.correct_answer) {
    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";
    result.innerHTML = "<p>Bravooo</p>";
  } else {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    result.innerHTML = "<p>Try again</p>";
  }
  result.innerHTML += "<button id='next'>Next Question</button>";
  for (var i = 0; i < optionElements.length; i++) {
    optionElements[i].removeEventListener("click", selectOption);
  }
};

for (let index = 0; index < optionElements.length; index++) {
  const element = optionElements[index];
  element.addEventListener("click", selectOption);
}
