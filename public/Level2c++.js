var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which access specifier allows the members of a class to be accessed by any function in the program? ",
    "options": [
    {
    "a": "public",
    "b": "private",
    "c": "protected",
    "d": "friend",
    }
    ],
    "answer": " public",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which OOP concept is used to hide the internal implementation details of a class?",
    "options": [
    {
    "a": " Polymorphism",
    "b": "Encapsulation",
    "c": "Inheritance",
    "d":"Abstraction",
    }
    ],
    "answer": "Encapsulation",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which STL component promotes generic programming by providing reusable components?",
    "options": [
    {
    "a": "Containers",
    "b": "Algorithms",
    "c": "Iterators",
    "d" : "Function Objects",
    }
    ],
    "answer": "Algorithms",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which STL component is used to manipulate elements in a container based on a specified condition",
    "options": [
    {
    "a": "Containers",
    "b": "Algorithms",
    "c": "Iterators",
    "d" : "Function Objects",
    }
    ],
    "answer": "Algorithms",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which operator is used to deallocate memory in C++?",
    "options": [
    {
    "a": "delete",
    "b": "free",
    "c": "deallocate",
    "d": "destroy",
    }
    ],
    "answer": "delete",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which principle in C++ ensures proper resource cleanup using constructors and destructors?",
    "options": [
    {
    "a": "RAII",
    "b": "OOP",
    "c": "DRY",
    "d" : "SOLID",
    }
    ],
    "answer": "RAII",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which keyword is used to specify the type of exceptions that a function can throw?",
    "options": [
    {
    "a": "throw",
    "b": "catch",
    "c": "try",
    "d":"No Exception",
    }
    ],
    "answer": "No Exception",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which type of exception is not explicitly declared in the function's exception specification?",
    "options": [
    {
    "a": "Handled Exception",
    "b": "Unhandled Exception",
    "c": "Standard Exception",
    "d": "Unknown Exception",
    }
    ],
    "answer": "Unhandled Exception",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which function is used to open a file in C++?",
    "options": [
    {
    "a": "open()",
    "b": "read()",
    "c": "write()",
    "d": "close()",
    }
    ],
    "answer": "open()",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which function is used to read data from a file in C++?",
    "options": [
    {
    "a": "open()",
    "b": "read()",
    "c": "write()",
    "d": "close()",
    }
    ],
    "answer": "read()",
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
