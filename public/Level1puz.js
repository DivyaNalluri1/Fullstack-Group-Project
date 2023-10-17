/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What comes once in a minute, twice in a moment, but never in a thousand years?",
    "options": [
    {
    "a": "The letter M",
    "b": "A leap year",    
    "c": "A second",
    "d": "A birthday"
    }
    ],
    "answer": "The letter M",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "I am taken from a mine and shut up in a wooden case from which I am never released, and yet I am used by almost every person. What am I?",
    "options": [
    {
    "a": "Gold",
    "b": "A diamond",
    "c": "A pencil lead",
    "d":"Water"
    }
    ],
    "answer": "A pencil lead",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
    "options": [
    {
    "a": "A tree",
    "b": "A fire",
    "c": "A rock",
    "d" : "A balloon"
    }
    ],
    "answer": "A fire",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "The more you take, the more you leave behind. What am I ?",
    "options": [
    {
    "a": "Footprints",
    "b": "Money",
    "c": "Secrets",
    "d" : "Love"
    }
    ],
    "answer":"Footprints",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    "options": [
    {
    "a": "A ghost",
    "b": "An echo",
    "c": "A radio",
    "d": "A mountain",
    }
    ],
    "answer": "An echo",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "What has keys but can't open locks?",
    "options": [
    {
    "a": "A keyboard",
    "b": "A piano",
    "c": " A treasure chest",
    "d" : "A bicycle"
    }
    ],
    "answer": "A keyboard",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "I'm tall when I'm young and short when I'm old. What am I?",
    "options": [
    {
    "a": "A tree",
    "b": "A candle",
    "c": "A book",
    "d":"A mountain"
    }
    ],
    "answer": "A candle",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "I am taken from a mine and get transformed, but I am never able to change my state. What am I?",
    "options": [
    {
    "a": "A diamond",
    "b": "Gold",
    "c": "Coal",
    "d": "Silver",
    }
    ],
    "answer": "Coal",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What comes once in a year, twice in a week, but never in a day?",
    "options": [
    {
    "a": "The letter E",
    "b": "A leap year",
    "c": "A birthday",
    "d": "A paycheck"
    }
    ],
    "answer": "The letter E",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "I'm not alive, but I can die. I'm not a plant, but I can grow. What am I?",
    "options": [
    {
    "a": "A stone",
    "b": "A shadow",
    "c": "A river",
    "d": "A snowflake",
    }
    ],
    "answer": "A shadow",
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