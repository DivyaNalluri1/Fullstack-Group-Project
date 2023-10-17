
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the main advantage of Java as a programming language?",
    "options": [
    {
    "a": "It is a compiled language",
    "b": "It is platform-independent",    
    "c": " It has a simple syntax",
    "d":"it is a low-level language"
    }
    ],
    "answer": "It is platform-independent",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which of the following is a primitive data type in Java? ",
    "options": [
    {
    "a": "String",
    "b": "int",
    "c": "ArrayList",
    "d":"Double"
    }
    ],
    "answer": "int",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which package contains classes for working with files and directories in Java?",
    "options": [
    {
    "a": "java.util",
    "b": "java.io",
    "c": "java.net",
    "d" : "java.sql"
    }
    ],
    "answer": "java.io",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which Java API is commonly used for handling date and time?",
    "options": [
    {
    "a": "java.util.Date",
    "b": "java.SQL.Date",
    "c": "java.time",
    "d" : "java.util.time"
    }
    ],
    "answer":"java.time",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is the primary function of the Java Virtual Machine (JVM)?",
    "options": [
    {
    "a": "Compiling Java source code",
    "b": "Executing Java bytecode",
    "c": "Debugging Java programs",
    "d": "Writing Java documentation",
    }
    ],
    "answer": "Executing Java bytecode",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which memory area of the JVM stores class metadata and method information?",
    "options": [
    {
    "a": "Heap",
    "b": "Stack",
    "c": "Method",
    "d" : "Area"
    }
    ],
    "answer": "Method",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which Java framework is commonly used for dependency injection and aspect-oriented programming?",
    "options": [
    {
    "a": "Hiberante",
    "b": "Spring",
    "c": "Spring Framework",
    "d":"Play framework"
    }
    ],
    "answer": "Spring Framework",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What is the primary purpose of Hibernate in Java?",
    "options": [
    {
    "a": "Building web applications",
    "b": "Implementing the Model-View-Controller (MVC) pattern",
    "c": "Object-Relational Mapping (ORM)",
    "d": "Creating Android apps",
    }
    ],
    "answer": "Object-Relational Mapping (ORM)",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which domain is Java primarily associated with when used for Android app development?",
    "options": [
    {
    "a": "Web development",
    "b": "Mobile development",
    "c": "Enterprise software ",
    "d": "Scientific computing"
    }
    ],
    "answer": "Mobile development",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "",
    "options": [
    {
    "a": "",
    "b": "",
    "c": "",
    "d": "",
    }
    ],
    "answer": "",
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