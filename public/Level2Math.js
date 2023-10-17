
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the intersection of two disjoint sets?",
    "options": [
    {
    "a": "{1, 2}",
    "b": "{3, 4, 5}",
    "c": "{3}",
    "d": "{3,4,5}"
    }
    ],
    "answer": "{3}",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What is the complement of a set A, denoted as A'?",
    "options": [
    {
    "a": "A ∪ A",
    "b": "A ∩ A",
    "c": "All elements not in set A",
    "d": "A ∩ Universal set"
    }
    ],
    "answer": "All elements not in set A",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is the number of subsets of a set with n elements, including the empty set and the set itself?",
    "options": [
    {
    "a": "n",
    "b": "2^n",
    "c": "n!",
    "d" : "n+1"
    }
    ],
    "answer": "2^n",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "How many ways can you select 3 cookies from a jar containing 10 different types of cookies?",
    "options": [
    {
    "a": "10",
    "b": "120",
    "c": "45",
    "d" : "130"
    }
    ],
    "answer": "45",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is a connected graph?",
    "options": [
    {
    "a": "A graph with no loops",
    "b": "A graph with all vertices connected by a path",
    "c": "A graph with no repeated edges",
    "d": "A graph with equal degrees for all vertices",
    }
    ],
    "answer": "A graph with all vertices connected by a path",
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
    "question": "What is the modular multiplicative inverse of 3 modulo 7?",
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
    "question": "What is the result of 2^3 mod 5?",
    "options": [
    {
    "a": "6",
    "b": "3",
    "c": "2",
    "d": "5"
    }
    ],
    "answer": "3",
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
    "question": "What is the result of the function composition (f ∘ g)(x)? ",
    "options": [
    {
    "a": "f(g(x))",
    "b": "g(f(x))",
    "c": "f(x) * g(x)",
    "d": "f(x) + g(x)",
    }
    ],
    "answer": "f(g(x))",
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