/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the intersection of two disjoint sets?",
    "options": [
    {
    "a": "Empty set",
    "b": "Universal set",
    "c": "Complement set",
    "d": "Same as the union"
    }
    ],
    "answer": "Empty set",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which set operation is commutative?",
    "options": [
    {
    "a": "Union",
    "b": "Intersection",
    "c": "Complement",

    "d":"Difference"
    }
    ],
    "answer": "Union",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "How many permutations are there of the letters in the word 'APPLE'?",
    "options": [
    {
    "a": "60",
    "b": "120",
    "c": "720",
    "d" : "5"
    }
    ],
    "answer": "720",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "In how many ways can you arrange 5 books on a shelf?",
    "options": [
    {
    "a": "110",
    "b": "120",
    "c": "121",
    "d" : "130"
    }
    ],
    "answer": "120",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is the maximum number of edges in a simple graph with 5 vertices?",
    "options": [
    {
    "a": "5",
    "b": "10",
    "c": "15",
    "d": "20",
    }
    ],
    "answer": "10",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "In a graph, what is the degree of a vertex?",
    "options": [
    {
    "a": "The number of edges connected to it",
    "b": "The number of vertices it is connected to",
    "c": "The distance from the source vertex",
    "d" : "The size of the largest clique it belongs to"
    }
    ],
    "answer": "The number of edges connected to it",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is the smallest prime number?",
    "options": [
    {
    "a": "0",
    "b": "1",
    "c": "2",
    "d":"3"
    }
    ],
    "answer": "2",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What is the greatest common divisor (GCD) of 12 and 18?",
    "options": [
    {
    "a": "6",
    "b": "4",
    "c": "2",
    "d": "5"
    }
    ],
    "answer": "6",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is a function in mathematics?",
    "options": [
    {
    "a": "A relation between sets",
    "b": "A set of integers",
    "c": "A sequence of numbers",
    "d": "A point on a graph"
    }
    ],
    "answer": "A relation between sets",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "What does it mean for a relation to be symmetric?",
    "options": [
    {
    "a": "It is reflexive and transitive",
    "b": "It is reflexive but not transitive",
    "c": "It is transitive but not reflexive",
    "d": "It is reflexive and its inverse is also a relation",
    }
    ],
    "answer": "It is reflexive and its inverse is also a relation",
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