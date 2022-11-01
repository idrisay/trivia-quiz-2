const getQuestion = async () => {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=1&type=multiple"
  );
  response = await response.json();
  return response.results[0];
};

let showQuestion = (question, quizWrapper) => {
  let randomNumber = getRandomArbitrary(0, 3);

  let answers = [...question.incorrect_answers]
  answers.splice(randomNumber, 0, question.correct_answer);
  console.log(question, randomNumber, answers);

  let newQuestionElm = '<div class="question-wrapper">';
  newQuestionElm += '<p id="category">' + question.category + "</p>";
  newQuestionElm += '<p id="difficulty">' + question.difficulty + "</p>";
  newQuestionElm += "<h1>" + question.question + "</h1>";

  answers.forEach(element => {
    newQuestionElm += '<p class="option">' + element + '</p>'
  });

  newQuestionElm += "<div id='result'></div>";


  newQuestionElm += "</div>";
  quizWrapper.innerHTML = newQuestionElm;
};

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getQuestion, showQuestion };
