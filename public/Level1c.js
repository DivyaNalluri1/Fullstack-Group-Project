var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the symbol used to indicate a single-line comment in C?",
    "options": [
    {
    "a": "#",
    "b": "//",
    "c": "/*",
    "d": "--",
    }
    ],
    "answer": "//",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which data type is used to store whole numbers in C?",
    "options": [
    {
    "a": "float",
    "b": "int",
    "c": "char",
    "d": "double",
    }
    ],
    "answer": "int",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "In C, which statement is used to make a decision among multiple options?",
    "options": [
    {
    "a": "for",
    "b": "switch",
    "c": "If",
    "d" : "while",
    }
    ],
    "answer": "switch",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "What does the break statement do in a loop?",
    "options": [
    {
    "a": " Terminates the loop prematurely",
    "b": " Skips the current iteration",
    "c": "Resumes the next iteration",
    "d" :"None of the above",
    }
    ],
    "answer": " Terminates the loop prematurely",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is a function prototype in C used for?",
    "options": [
    {
    "a": "Defining a new function",
    "b": "Declaring a function before its actual definition",
    "c": "Naming a function",
    "d": "Specifying the function's return type",
    }
    ],
    "answer": "Declaring a function before its actual definition",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which keyword is used to define a function in C?",
    "options": [
    {
    "a": "func",
    "b": "define",
    "c": "void",
    "d" : "function",
    }
    ],
    "answer": "void",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "In C, arrays are collections of elements of the same data type. What is the first index of an array?",
    "options": [
    {
    "a": "0",
    "b": "1",
    "c": "-1",
    "d":"Depends on array",
    }
    ],
    "answer": "0",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Pointers in C store",
    "options": [
    {
    "a": "The value of a variable",
    "b": "The address of a variable",
    "c": "The data type of a variable",
    "d": "The size of a variable",
    }
    ],
    "answer": "The address of a variable",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which function is used to open a file in C for reading?",
    "options": [
    {
    "a": "fopen('file.txt', 'w');",
    "b": "fopen('file.txt', 'r');",
    "c": "open_file('file.txt', 'read'); ",
    "d": "read_file('file.txt');",
    }
    ],
    "answer": "fopen('file.txt', 'r');",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "In C, which file mode is used to open a file for both reading and writing without overwriting the existing content? ",
    "options": [
    {
    "a": "r",
    "b": "w",
    "c": "a",
    "d": "r+",
    }
    ],
    "answer": "r+",
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