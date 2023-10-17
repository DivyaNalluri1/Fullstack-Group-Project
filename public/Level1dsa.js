var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is a data structure?",
    "options": [
    {
    "a": " A programming language",
    "b": " A collection of algorithms",
    "c": "A way to store and organize data",
    "d": "A type of computer hardware"
    }
    ],
    "answer": " A way to store and organize data",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What are the disadvantages of arrays?",
    "options": [
    {
    "a": " Index value of an array can be negative",
    "b": "Elements are sequentially accessed",
    "c": "Data structure like queue or stack cannot be implemented",
    "d":"There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size"
    }
    ],
    "answer": "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which data structure is used for implementing recursion?",
    "options": [
    {
    "a": "Stack",
    "b": "Queue",
    "c": "List",
    "d" : "Array"
    }
    ],
    "answer": "Stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "The data structure required to check whether an expression contains a balanced parenthesis is?",
    "options": [
    {
    "a": "Queue",
    "b": "Stack",
    "c": "Tree",
    "d" : "Array"
    }
    ],
    "answer": "Stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which of the following is not the application of stack?",
    "options": [
    {
    "a": "Data Transfer between two asynchronous process",
    "b": "Compiler Syntax Analyzer",
    "c": "Tracking of local variables at run time",
    "d": "A parentheses balancing program",
    }
    ],
    "answer": "Data Transfer between two asynchronous process",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which data structure is needed to convert infix notation to postfix notation?",
    "options": [
    {
    "a": "Tree",
    "b": "Branch",
    "c": "Stack",
    "d" : "Queue"
    }
    ],
    "answer": "Stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is the value of the postfix expression 6 3 2 4 + – *?",
    "options": [
    {
    "a": "74",
    "b": "-18",
    "c": "20",
    "d":"40"
    }
    ],
    "answer": "-18",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What data structure would you mostly likely see in non recursive implementation of a recursive algorithm?",
    "options": [
    {
    "a": "Stack",
    "b": "Linked List",
    "c": "Tree",
    "d": "Queue",
    }
    ],
    "answer": "Stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which of the following statement(s) about stack data structure is/are NOT correct?",
    "options": [
    {
    "a": "Top of the Stack always contain the new node",
    "b": "Stack is the FIFO data structure",
    "c": "Null link is present in the last node at the bottom of the stack",
    "d": "Linked List are used for implementing Stacks"
    }
    ],
    "answer": "Stack is the FIFO data structure",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "The data structure required for Breadth First Traversal on a graph is?",
    "options": [
    {
    "a": "Array",
    "b": "Stack",
    "c": "Tree",
    "d": "Queue",
    }
    ],
    "answer": "Queue",
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