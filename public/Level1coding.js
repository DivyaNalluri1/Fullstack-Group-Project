var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Of the following, if statements, which one correctly executes three instructions if the condition is true?    ",
    "options": [
    {
    "a": "If (x < 0) a = b * 2; y = x; z = a – y;",
    "b": "{if (x < 0) a = b * 2; y = x; z = a – y;}",    
    "c": "If{ (x < 0) a = b * 2; y = x; z = a – y ; }",
    "d":"If (x < 0) { a = b * 2; y = x; z = a – y; }"
    }
    ],
    "answer": "If (x < 0) { a = b * 2; y = x; z = a – y; }",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Jim currently runs a car rental dealership and wishes to write a program that allows the user to enter the temperature of the location they plan to visit and then recommend a car based on the data.  Below is a summary of the program structure Jim is looking for.         Temp greater than 80 a Convertible should be selected.         Temp  greater than 60 and less than 80 an SUV should be selected         Temp less than 60 a truck should be selected.   Jim has no trouble writing the code if the temperate is greater than 80 but gets stuck when he arrives at the second line of code which reads Temp greater than 60 and less than 80 an SUV should be selected.  What type of operator is Jim needing to use within his code?",
    "options": [
    {
    "a": "&&",
    "b": "||",
    "c": "!=",
    "d":"=="
    }
    ],
    "answer": "&&",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": " ___ is the process of finding errors and fixing them within a program",
    "options": [
    {
    "a": "Compiling",
    "b": "Executing",
    "c": "Debugging",
    "d" : "Scanning"
    }
    ],
    "answer": "Debugging",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified.",
    "options": [
    {
    "a": "if-else",
    "b": "for",
    "c": "while",
    "d" : "if"
    }
    ],
    "answer":"for",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Kim has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop?",
    "options": [
    {
    "a": "Initialization",
    "b": "Condition",
    "c": "Variable",
    "d": "increment",
    }
    ],
    "answer": "Variable",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which command will stop an infinite loop? ",
    "options": [
    {
    "a": "Alt - C",
    "b": "Shift - C",
    "c": "Esc",
    "d" : "Ctrl - C"
    }

    ],
    "answer": "Alt - C",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "During program development, software requirements specify",
    "options": [
    {
    "a": "How the program will accomplish the task",
    "b": "What the task is that the program must perform",
    "c": "How to divide the task into subtasks",
    "d":"How to test the program when it is done"
    }
    ],
    "answer": "What the task is that the program must perform",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "A loop that never ends is referred to as a(n)___.",
    "options": [
    {
    "a": "while",
    "b": "infinite",
    "c": "for",
    "d": "recursive",
    }
    ],
    "answer": "infinite",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Jay is considering adding a repetition statement within his Java programming final project. Jay is unsure of the number of times each loop needs to execute.  Analyze the conditional statements below and select which statement best fits the need identified by Jay within his programming.    ",
    "options": [
    {
    "a": "while",
    "b": "for",
    "c": "switch statements",
    "d": "if-else"
    }
    ],
    "answer": "while",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": " Analyze the following error that was received when Scott tried to compile his Java program named average. Average.java:14: 'else' without 'if' else ^ Which of the following could have resulted in the error being generated?",
    "options": [
    {
    "a": "Scott used an infinite loop within his program",
    "b": "Scott placed a semicolon at the end of an If statement",
    "c": "Scott placed a semicolon at the end of an If statement",
    "d": "Scott omitted a line of code below the If statement such as a System.out.pritnln or a Keybaord.readInt();",
    }
    ],
    "answer": "Scott omitted a line of code below the If statement such as a System.out.pritnln or a Keybaord.readInt();",
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