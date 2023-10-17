
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Java is commonly used for building desktop applications with graphical user interfaces (GUIs) through which framework?",
    "options": [
    {
    "a": "Hibernate",
    "b": "Spring Framework",    
    "c": "JavaFX",
    "d":"Struts"
    }
    ],
    "answer": "JavaFX",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which domain often involves the use of Java for scientific computing and data analysis?",
    "options": [
    {
    "a": "Web development",
    "b": "Mobile development",
    "c": "Scientific and embedded systems",
    "d":"Enterprise software"
    }
    ],
    "answer": "Scientific and embedded systems",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which Java framework is used for building web applications based on the Model-View-Controller (MVC) pattern?",
    "options": [
    {
    "a": "Hibernate",
    "b": "Spring Framework",    
    "c": "JavaFX",
    "d":"Struts"
    }
    ],
    "answer": "Struts",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which framework is commonly used for building scalable and high-performance web applications in Java?",
    "options": [
    {
    "a": "Hibernate",
    "b": "Spring Framework",    
    "c": "JavaFX",
    "d":"Play Framework"
    }
    ],
    "answer":"Play Framework",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is the purpose of the Java HotSpot VM?",
    "options": [
    {
    "a": "Debugging Java applications",
    "b": "Improving the performance of Java applications",
    "c": "Running Java applets in a web browser",
    "d": "Running Java on mobile devices",
    }
    ],
    "answer": "Improving the performance of Java applications",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which component of the JVM is responsible for garbage collection?",
    "options": [
    {
    "a": "Class Loader",
    "b": "Bytecode Verifier",
    "c": "Garbage Collector",
    "d" : "Execution Engine"
    }
    ],
    "answer": "Garbage Collector",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which API is used for creating and manipulating XML documents in Java?",
    "options": [
    {
    "a": "java.util.Xml",
    "b": "javax.xml",
    "c": "java.xml.parser",
    "d":"org.w3c.dom"
    }
    ],
    "answer": "org.w3c.dom",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which API is used for creating web services in Java?",
    "options": [
    {
    "a": "java.net",
    "b": "javax.servlet",
    "c": "javax",
    "d": "javax.web",
    }
    ],
    "answer": "javax.servlet",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "In Java, what is the default value of a boolean variable?",
    "options": [
    {
    "a": "true",
    "b": "false",
    "c": "0",
    "d": "0"
    }
    ],
    "answer": "false",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which keyword is used to define a class in Java?",
    "options": [
    {
    "a": "class",
    "b": "void",
    "c": "new",
    "d": "extends",
    }
    ],
    "answer": "class",
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