/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Find the roots of the quadratic equation: x2 + 2x - 15 = 0?",
    "options": [
    {
    "a": "-5,3",
    "b": "3,5",
    "c": "-3,5",
    "d": "-3,-5"
    }
    ],
    "answer": "-5,3",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": " How many onto functions can be defined from the set A = {1, 2, 3, 4} to {a, b, c}?",
    "options": [
    {
    "a": "81",
    "b": "79",
    "c": "36",
    "d":"45"
    }
    ],
    "answer": "36",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "f(x + y) = f(x)f(y) for all x, y, f(4) = +3 what is f(-8)?",
    "options": [
    {
    "a": "1/3",
    "b": "1/9",
    "c": "9",
    "d" : "6"
    }
    ],
    "answer": "1/9",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "The roots of the equation 3x2 - 12x + 10 = 0 are? ",
    "options": [
    {
    "a": "rational and unequal",
    "b": "real and equal",
    "c": " complex",
    "d" : "irrational and unequal"
    }
    ],
    "answer": "irrational and unequal",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which of the following statements is not correct?",
    "options": [
    {
    "a": "log10 10 = 1",
    "b": "log (2 + 3) = log (2 x 3)",
    "c": "log10 1 = 0",
    "d": " log (1 + 2 + 3) = log 1 + log 2 + log 3",
    }
    ],
    "answer": "log (2 + 3) = log (2 x 3)",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "If log 2 = 0.3010 and log 3 = 0.4771, the value of log5 512 is:    ",
    "options": [
    {
    "a": "2.870",
    "b": "2.967",
    "c": "3.876",
    "d" : "3.912"
    }
    ],
    "answer": "3.912",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": " What is the value of 2^3 * 2^4?",
    "options": [
    {
    "a": "16",
    "b": "64",
    "c": "128",
    "d":"126"
    }
    ],
    "answer": "64",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Simplify √(16) * √(9).",
    "options": [
    {
    "a": "4",
    "b": "8",
    "c": "12",
    "d": "24"
    }
    ],
    "answer": "4",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": " What type of graph is best suited for showing the change in temperature over a week?",
    "options": [
    {
    "a": "Line graph",
    "b": "Bar graph",
    "c": "Pie chart",
    "d": "Scatterplot"
    }
    ],
    "answer": "Line graph",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "In a bar graph, which axis typically represents the categories or labels?",
    "options": [
    {
    "a": "X-axis",
    "b": "Y-axiss",
    "c": "Z-axis",
    "d": "None of these",
    }
    ],
    "answer": "X-axis",
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