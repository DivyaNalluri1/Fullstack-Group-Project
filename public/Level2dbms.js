var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which of the following is not a function of the database?",
    "options": [
    {
    "a": "Managing stored data",
    "b": "Manipulating data",
    "c": "Security for stored data",
    "d": "Analysing code"
    }
    ],
    "answer": "Analysing code",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which of the following is a function of the DBMS?",
    "options": [
    {
    "a": "Storing data",
    "b": " Providing multi-users access control",
    "c": "Data Integrity",
    "d":"All of the above"
    }
    ],
    "answer": "All of the above",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": " Which of the following is a component of the DBMS?",
    "options": [
    {
    "a": "Data",
    "b": "Data Languages",
    "c": "Data Manager",
    "d" : "All of the above"
    }
    ],
    "answer": "All of the above",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which of the following is known as a set of entities of the same type that share same properties, or attributes?",
    "options": [
    {
    "a": "Relation set",
    "b": "Tuples",
    "c": "Entity set",
    "d" : "Entity Relation model"
    }
    ],
    "answer": "Entity set",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is information about data called?",
    "options": [
    {
    "a": "Hyper data",
    "b": "Tera data",
    "c": "Meta data",
    "d": "Relations",
    }
    ],
    "answer": "Meta data",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "What does an RDBMS consist of?",
    "options": [
    {
    "a": "Collection of Records",
    "b": "Collection of Keys",
    "c": "Collection of Tables",
    "d" : "Collection of Fields"
    }
    ],
    "answer": "Collection of Tables",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "The ability to query data, as well as insert, delete, and alter tuples, is offered by ____",
    "options": [
    {
    "a": "TCL (Transaction Control Language)",
    "b": "DCL (Data Control Language)",
    "c": "DDL (Data Definition Langauge)",
    "d":"DML (Data Manipulation Langauge)"
    }
    ],
    "answer": "DML (Data Manipulation Langauge)",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": " ______ is a set of one or more attributes taken collectively to uniquely identify a record.",
    "options": [
    {
    "a": "Primary Key",
    "b": "Foreign key",
    "c": "Super key",
    "d": "Candidate key",
    }
    ],
    "answer": "Super key",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which command is used to remove a relation from an SQL?",
    "options": [
    {
    "a": "Drop table",
    "b": "Delete",
    "c": "Purge",
    "d": "Remove"
    }
    ],
    "answer": "Drop table",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which forms have a relation that contains information about a single entity?",
    "options": [
    {
    "a": "4NF",
    "b": "2NF",
    "c": "3NF",
    "d": "4NF",
    }
    ],
    "answer": "4NF",
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