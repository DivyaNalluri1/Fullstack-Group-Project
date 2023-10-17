/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What does a pie chart represent?",
    "options": [
    {
    "a": "Absolute quantities of data",
    "b": "Comparisons of parts to a whole",
    "c": "Changes over time",
    "d": "Relationships between two variables"
    }
    ],
    "answer": "Comparisons of parts to a whole",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "In a scatterplot, what does each point on the graph typically represent?",
    "options": [
    {
    "a": "A category",
    "b": "A value on the x-axis",
    "c": "A value on the y-axis",
    "d":" A data point with two variables"
    }
    ],
    "answer": " A data point with two variables",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "If the roots of a quadratic equation are 20 and -7, then find the equation?",
    "options": [
    {
    "a": "x2 + 13x - 140 = 0",
    "b": "x2 - 13x - 140 = 0",
    "c": "x2 - 13x - 140 = 0",
    "d" : "x2 + 13x + 140 = 0"
    }
    ],
    "answer": "x2 - 13x - 140 = 0",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": " The sum and the product of the roots of the quadratic equation x2 + 20x + 3 = 0 are ?",
    "options": [
    {
    "a": "10,3",
    "b": "-10,3",
    "c": "20,-3",
    "d" : "None of these"
    }
    ],
    "answer": "None of these",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Find the maximum value of f(x); if f(x) is defined as the Min {-(x – 1)2 + 2, (x – 2)2 + 1}",
    "options": [
    {
    "a": "1",
    "b": "2",
    "c": "0",
    "d": "3",
    }
    ],
    "answer": "2",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "[x] = greatest integer less than or equal to x. If x lies between 3 and 5, what is the probability that [x2] = [x]2?",
    "options": [
    {
    "a": "Roughly 0.64",
    "b": "Roughly 0.5",
    "c": "Roughly 0.14",
    "d" : "Roughly 0.36"
    }
    ],
    "answer": "Roughly 0.14",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is the value of √(25) + √(49)?",
    "options": [
    {
    "a": "10",
    "b": "5",
    "c": "12",
    "d":"24"
    }
    ],
    "answer": "64",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What is the value of (4^3)^(1/2)?",
    "options": [
    {
    "a": "4",
    "b": "8",
    "c": "16",
    "d": "64"
    }
    ],
    "answer": "4",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "If log 27 = 1.431, then the value of log 9 is:",
    "options": [
    {
    "a": "0.934",
    "b": "0.945",
    "c": "0.954",
    "d": "0.958"
    }
    ],
    "answer": "0.954",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "If log10 5 + log10 (5x + 1) = log10 (x + 5) + 1, then x is equal to:",
    "options": [
    {
    "a": "1",
    "b": "3",
    "c": "5",
    "d": "10",
    }
    ],
    "answer": "3",
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