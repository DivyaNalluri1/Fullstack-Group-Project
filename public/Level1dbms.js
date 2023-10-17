var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the full form of DBMS?",
    "options": [
    {
    "a": " Data of Binary Management System",
    "b": "Database Management System",
    "c": "Database Management Service",
    "d": "Data Backup Management System"
    }
    ],
    "answer": "Database Management System",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What is a database?",
    "options": [
    {
    "a": "Organized collection of information that cannot be accessed, updated, and managed",
    "b": "Collection of data or information without organizing",
    "c": "Organized collection of data or information that can be accessed, updated, and managed",
    "d":"Organized collection of data that cannot be updated"
    }
    ],
    "answer": "Organized collection of data or information that can be accessed, updated, and managed",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is DBMS?",
    "options": [
    {
    "a": "DBMS is a collection of queries",
    "b": "DBMS is a high-level language",
    "c": "DBMS is a programming language",
    "d" : "DBMS stores, modifies and retrieves data"
    }
    ],
    "answer": "DBMS stores, modifies and retrieves data",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Who created the first DBMS?",
    "options": [
    {
    "a": "Edgar Frank Codd",
    "b": "Charles Bachman",
    "c": "Charles Babbage",
    "d" : "Sharon B. Codd"
    }
    ],
    "answer": "Charles Bachman",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which type of data can be stored in the database?",
    "options": [
    {
    "a": "Image oriented data",
    "b": "Text, files containing data",
    "c": "Data in the form of audio or video",
    "d": "All of the above",
    }
    ],
    "answer": "All of the above",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "In which of the following formats data is stored in the database management system?",
    "options": [
    {
    "a": "Image",
    "b": "Text",
    "c": "Table",
    "d" : "Graph"
    }
    ],
    "answer": "Table",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which of the following is not a type of database?",
    "options": [
    {
    "a": "Hierarchical",
    "b": "Network",
    "c": "Distributed",
    "d":"Decentralized"
    }
    ],
    "answer": "Decentralized",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which of the following is not an example of DBMS?",
    "options": [
    {
    "a": "MySQL",
    "b": "Microsoft Acess",
    "c": "IBM DB2",
    "d": "Google",
    }
    ],
    "answer": "Google",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which of the following is not a feature of DBMS?",
    "options": [
    {
    "a": "Minimum Duplication and Redundancy of Data",
    "b": "High Level of Security",
    "c": "Single-user Access only",
    "d": "Support ACID Property"
    }
    ],
    "answer": "Single-user Access only",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which of the following is a feature of the database?",
    "options": [
    {
    "a": "No-backup for the data stored",
    "b": "User interface provided",
    "c": " Lack of Authentication",
    "d": "Store data in multiple locations",
    }
    ],
    "answer": "User interface provided",
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