var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What can you infer from the passage?",
    "options": [
    {
    "a": "It will rain tomorrow",
    "b": "The chef will prepare a special dish",
    "c": "The protagonist was sad",
    "d": "The factory's profits have increased",
    }
    ],
    "answer": "The chef will prepare a special dish",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What is the tone of the author in the passage?",
    "options": [
    {
    "a": "Annoyed",
    "b": "Excited",
    "c": "Informative",
    "d": "Suspicious",
    }
    ],
    "answer": "Informative",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What can you infer from the speaker's tone?",
    "options": [
    {
    "a": "The speaker is angry",
    "b": "The speaker is excited",
    "c": "The speaker is bored",
    "d" : "The speaker is concerned",
    }
    ],
    "answer": "The speaker is excited",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "According to the speaker, what is the main challenge in starting a new business?",
    "options": [
    {
    "a": "Finding a good location",
    "b": "Hiring the right employees",
    "c": "Raising enough capital",
    "d" :"Setting the right prices",
    }
    ],
    "answer": "Raising enough capital",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Based on the map, which direction is the river flowing?",
    "options": [
    {
    "a": "North",
    "b": "South",
    "c": "East",
    "d": "West",
    }
    ],
    "answer": "East",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which image best represents the concept of unity or teamwork?",
    "options": [
    {
    "a": "Image A with two people working together",
    "b": "Image B with a single person working alone",
    "c": "Image C with a jigsaw puzzle",
    "d" : "Image D with a diverse group of people",
    }
    ],
    "answer": "Image A with two people working together",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "When evaluating an argument, what should you consider to assess its validity?",
    "options": [
    {
    "a": "The author's personal experiences",
    "b": "The credibility of the sources",
    "c": "The length of the argument",
    "d": "The use of emotional language",
    }
    ],
    "answer": "The credibility of the sources",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "In a debate, what is the role of a rebuttal?",
    "options": [
    {
    "a": "To present the main argument",
    "b": "To support the opponent's position",
    "c": "To challenge and counter the opponent's arguments",
    "d": "To summarize the debate",
    }
    ],
    "answer": "To challenge and counter the opponent's arguments",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What cultural context might influence the interpretation of a thumbs-up gesture?",
    "options": [
    {
    "a": "Approval or agreement",
    "b": "Disagreement or refusal",
    "c": "A greeting gesture",
    "d": " A sign of surprise",
    }
    ],
    "answer": "Disagreement or refusal",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Understanding the historical context of a speech by Martin Luther King Jr. requires knowledge of which major event?",
    "options": [
    {
    "a": "The American Revolution",
    "b": "The Civil War",
    "c": "The Civil Rights Movement",
    "d": "The Industrial Revolution",
    }
    ],
    "answer": "The Civil Rights Movement",
    "score": 0,
    "status": ""
    },
    ]}
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    var requiredScore = 7
    var currentLevel = 0;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });
