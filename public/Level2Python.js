/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which framework provides an Object-Relational Mapping (ORM) system for database interaction in Python web development?",
    "options": [
    {
    "a": "Django",
    "b": "Numpy",
    "c": "Matplotlib",
    "d": "TensorFlow"
    }
    ],
    "answer": "Django",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "In Flask, which module is commonly used for rendering HTML templates? ",
    "options": [
    {
    "a": "flask.render",
    "b": "flask.html",
    "c": "flask.template",
    "d":"flask.render_template"
    }
    ],
    "answer": "flask.render_template",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What does the term 'Jupyter Notebook' refer to in the context of data science with Python?",
    "options": [
    {
    "a": "A popular web framework",
    "b": "An integrated development environment for data analysis",
    "c": "A data visualization library",
    "d" : " A database management tool"
    }
    ],
    "answer": "An integrated development environment for data analysis",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which library is commonly used for creating and training neural networks in Python?",
    "options": [
    {
    "a": "pandas",
    "b": "scikit-learn",
    "c": "TensorFlow",
    "d" : "Flask"
    }
    ],
    "answer": "TensorFlow",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is the standard library module in Python often used for file manipulation and data extraction?",
    "options": [
    {
    "a": "os",
    "b": "requests",
    "c": "numpy",
    "d": "pandas",
    }
    ],
    "answer": "",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which of the following is not a use case for Python in automation and scripting?",
    "options": [
    {
    "a": "Task automation",
    "b": "File manipulation",
    "c": "Data analysis",
    "d" : "Web scraping"
    }
    ],
    "answer": "Data analysis",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What type of games is Pygame primarily designed for?",
    "options": [
    {
    "a": "3D first-person shooters",
    "b": "2D games and multimedia applications",
    "c": "Text-based adventures",
    "d":"Simulation games"
    }
    ],
    "answer": "2D games and multimedia applications",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What role does Python play in cybersecurity tasks?    ",
    "options": [
    {
    "a": "Scientific research",
    "b": "Game development",
    "c": "Automating network attacks",
    "d": "Penetration testing, vulnerability scanning, and network monitoring"
    }
    ],
    "answer": "Penetration testing, vulnerability scanning, and network monitoring",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is the primary purpose of socket programming in Python? ",
    "options": [
    {
    "a": "Scientific computing",
    "b": "Web development",
    "c": "Network communication",
    "d": "Game development"
    }
    ],
    "answer": "Network communication",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "In the context of network programming, what does 'packet sniffing' refer to?",
    "options": [
    {
    "a": "Twisted",
    "b": "Django",
    "c": "Network communication",
    "d": "scikit-learn"
    }
    ],
    "answer": "Network communication",
    
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