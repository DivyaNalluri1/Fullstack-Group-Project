var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is an operating system?",
    "options": [
    {
    "a": "interface between the hardware and application programs",
    "b": "collection of programs that manages hardware resources",    
    "c": "system service provider to the application programs    ",
    "d":"All of the above"
    }
    ],
    "answer": "All of the above",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": " What is the main function of the command interpreter?",
    "options": [
    {
    "a": "to provide the interface between the API and application program",
    "b": "to handle the files in the operating system    ",
    "c": "to get and execute the next user-specified command",
    "d":"none of the mentioned"
    }
    ],
    "answer": "to get and execute the next user-specified command",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
    "options": [
    {
    "a": "Priority",
    "b": "Round Robin",
    "c": "Shortest Job First",
    "d" : "All of the mentioned    "
    }
    ],
    "answer": "Shortest Job First",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "To access the services of the operating system, the interface is provided by the",
    "options": [
    {
    "a": "Library",
    "b": "System calls",
    "c": "Assembly instructions",
    "d" : "API"
    }
    ],
    "answer":"System calls",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "CPU scheduling is the basis of _____",
    "options": [
    {
    "a": "multiprogramming operating systems",
    "b": "larger memory sized systems",
    "c": "multiprocessor systems",
    "d": "none",
    }
    ],
    "answer": "multiprogramming operating systems",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which one of the following is not a real time operating system?",
    "options": [
    {
    "a": "RTLinux",
    "b": "Palm OS",
    "c": "QNX",
    "d" : "VxWorks"
    }
    ],
    "answer": "Palm OS",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "In operating system, each process has its own ____",
    "options": [
    {
    "a": "open files",
    "b": "pending alarms, signals, and signal handlers",
    "c": "address space and global variables",
    "d":"all"
    }
    ],
    "answer": "all",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Swapping ___ be done when a process has pending I/O, or has to execute I/O operations only into operating system buffers",
    "options": [
    {
    "a": "must never",
    "b": "maybe",
    "c": "can",
    "d": "must",
    }
    ],
    "answer": "must never",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "The main memory accommodates ____",
    "options": [
    {
    "a": "cpu",
    "b": "user processes",
    "c": "operating system",
    "d": "all"
    }
    ],
    "answer": "all",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "The operating system is responsible for?",
    "options": [
    {
    "a": "bad-block recovery",
    "b": "booting from disk",
    "c": "disk initialization",
    "d": "all",
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