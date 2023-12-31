var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Identify the invalid constant used in fseek() function as ‘whence’ reference.",
    "options": [
    {
    "a": "SEEK_SET",
    "b": "SEEK_CUR",    
    "c": "SEEK_BEG",
    "d":" SEEK_END"
    }
    ],
    "answer": "SEEK_END",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": " Who developed Python Programming Language?",
    "options": [
    {
    "a": "Wick van Rossum ",
    "b": "Rasmus Lerdorf",
    "c": " Guido van Rossum",
    "d":"Niene Stom"
    }
    ],
    "answer": "Niene Stom",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which of the following is not a valid C variable name?",
    "options": [
    {
    "a": " int number;",
    "b": "float rate;",
    "c": "int variable_count;",
    "d" : "int $main;"
    }
    ],
    "answer": "int $main;",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which component is used to compile, debug and execute the java programs?",
    "options": [
    {
    "a": "JRE",
    "b": "JDE",
    "c": "JIT",
    "d" : "JDK"
    }
    ],
    "answer":"JDK",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which of the following is the correct syntax of including a user defined header files in C++?",
    "options": [
    {
    "a": "#include [userdefined]",
    "b": "#include “userdefined”",
    "c": "#include <userdefined>",
    "d": "#include <userdefined.h> ",
    }
    ],
    "answer": "#include “userdefined”",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which of the following user-defined header file extension used in c++?",
    "options": [
    {
    "a": "hg",
    "b": "h",
    "c": "hf",
    "d" : "hpp"
    }
    ],
    "answer": "h",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is coding theory primarily concerned with?",
    "options": [
    {
    "a": "Writing efficient code",
    "b": "Decoding secret messages",
    "c": "Designing error-detecting and error-correcting codes",
    "d":"Creating algorithms for sorting"
    }
    ],
    "answer": "Designing error-detecting and error-correcting codes",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which of the following is a key goal of coding theory? ",
    "options": [
    {
    "a": "Minimizing the number of lines of code",
    "b": "Maximizing the speed of code execution",
    "c": "Minimizing errors in transmitted data",
    "d": "Maximizing code complexity",
    }
    ],
    "answer": "Minimizing errors in transmitted data",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is a parity bit used for in coding theory?    ",
    "options": [
    {
    "a": "Encrypting data  ",
    "b": "Detecting errors in transmitted data",
    "c": "Sorting data efficiently",
    "d": " Compressing data"
    }
    ],
    "answer": "Detecting errors in transmitted data",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which coding theory concept is used to recover lost or corrupted data during transmission?    ",
    "options": [
    {
    "a": "Checksum",
    "b": "Hashing",
    "c": "Hamming code",
    "d": "Bubble sort    ",
    }
    ],
    "answer": "Hamming code",
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