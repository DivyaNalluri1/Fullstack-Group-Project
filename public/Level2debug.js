var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is a memory leak?",
    "options": [
    {
    "a": "Writing  Code",
    "b": "Fixing errors in code",    
    "c": "Testing code",
    "d":"Documenting code"
    }
    ],
    "answer": "Fixing errors in code",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question":"Which tool helps analyze the runtime behavior of a program?    ",
    "options": [
    {
    "a": "Compiler",
    "b": "Debugger    ",
    "c": "Profiler",
    "d":" Hardware"
    }
    ],
    "answer": "Profiler",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What does a breakpoint do in a debugger?",
    "options": [
    {
    "a": " Stops the program at a specific point",
    "b": "Continues the program execution",
    "c": "Deletes the code",
    "d" : "Prints debugging information"
    }
    ],
    "answer": " Stops the program at a specific point",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "What is a stack trace?",
    "options": [
    {
    "a": "A list of errors in the code",
    "b": " A report generated by a debugger",
    "c": "A sequence of function calls leading to an error",
    "d" : "A type of debugging tool"
    }
    ],
    "answer":"A sequence of function calls leading to an error",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which debugging technique involves adding print statements to the code?",
    "options": [
    {
    "a": " Breakpoint debugging",
    "b": "Static analysis",
    "c": "Dynamic analysis    ",
    "d": "Print debugging",
    }
    ],
    "answer": "Print debugging",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "What is the purpose of a watchpoint in debugging?",
    "options": [
    {
    "a": "To watch the code execute",
    "b": "To break the code",
    "c": "To monitor changes to a variable",
    "d" : "To analyze code statically"
    }
    ],
    "answer": "To monitor changes to a variable",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is the role of a debugger's step into feature?    ",
    "options": [
    {
    "a": "Skips to the next line of code",
    "b": "Steps into a function or method",
    "c": "Exits the current function",
    "d":"Restarts the program    "
    }
    ],
    "answer": "Steps into a function or method",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "In debugging, what is a core dump?    ",
    "options": [
    {
    "a": " A dump of the program's memory",
    "b": "A log file",
    "c": "A summary of error    ",
    "d": " A screenshot of the code",
    }
    ],
    "answer": " A dump of the program's memory",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which type of error is identified by the compiler during the compilation process?    ",
    "options": [
    {
    "a": " Syntax error    ",
    "b": "Logical error",
    "c": "runtime error",
    "d": "semantic error"
    }
    ],
    "answer": " Syntax error    ",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "What is a race condition in the context of debugging?    ",
    "options": [
    {
    "a": "A competition between developers",
    "b": "A type of logical error",
    "c": " Unpredictable behavior due to simultaneous execution",
    "d": "Ignoring breakpoints",   
    }
    ],
    "answer": " Unpredictable behavior due to simultaneous execution",
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