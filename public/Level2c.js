var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "In C, what symbol is used to denote the end of a statement?",
    "options": [
    {
    "a": ",",
    "b": ":",
    "c": ".",
    "d": ";",
    }
    ],
    "answer": ";",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What is the result of the expression 5 / 2 in C?",
    "options": [
    {
    "a": "2.5",
    "b": "2",
    "c": "2.0",
    "d": "3.5",
    }
    ],
    "answer": "2",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "How many times will a do-while loop execute if the condition is initially false?",
    "options": [
    {
    "a": "Zero times",
    "b": "Once",
    "c": "Twice",
    "d" : "Indefinitely",
    }
    ],
    "answer": "Zero times",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which of the following is not a valid comparison operator in C?",
    "options": [
    {
    "a": "!=",
    "b": ">=",
    "c": "><",
    "d" :"<",
    }
    ],
    "answer": "><",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is a parameter in a function?",
    "options": [
    {
    "a": "A variable that holds the function's name",
    "b": "A variable declared inside the function",
    "c": "A value passed to the function when it is not called",
    "d": "A value passed to the function when it is called",
    }
    ],
    "answer": "A value passed to the function when it is called",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "What is the return type of a function that doesn't return any value in C?",
    "options": [
    {
    "a": "int",
    "b": "null",
    "c": "void",
    "d" : "none",
    }
    ],
    "answer": "void",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is pointer arithmetic used for in C?",
    "options": [
    {
    "a": "To perform arithmetic operations on values ",
    "b": "To perform mathematical calculations",
    "c": "To manipulate memory addresses",
    "d":"To compare pointers",
    }
    ],
    "answer": "To manipulate memory addresses",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How do you declare a pointer to an integer variable in C?",
    "options": [
    {
    "a": "int *ptr;",
    "b": "int ptr;",
    "c": "pointer int ptr;",
    "d": "pointer int *ptr;",
    }
    ],
    "answer": "int ptr;",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What function is used to write data to a file in C?",
    "options": [
    {
    "a": "fread()",
    "b": "fwrite()",
    "c": "write()",
    "d": "fprintf()"
    }
    ],
    "answer": "fprintf()",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which function is used to check if the end of a file has been reached during file input in C? ",
    "options": [
    {
    "a": "feof()",
    "b": "eof()",
    "c": "endOfFile()",
    "d": "fileEnd()",
    }
    ],
    "answer": "feof()",
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
