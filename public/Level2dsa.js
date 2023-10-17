var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "The prefix form of A-B/ (C * D ^ E) is?",
    "options": [
    {
    "a": "-A/B*C^DE",
    "b": "-A/BC*^DE",
    "c": "-ABCD*^DE",
    "d": " -/*^ACBDE"
    }
    ],
    "answer": "-A/B*C^DE",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": " Which of the following points is/are not true about Linked List data structure when it is compared with an array?",
    "options": [
    {
    "a": "Random access is not allowed in a typical implementation of Linked Lists",
    "b": "Access of elements in linked list takes less time than compared to arrays",
    "c": "Arrays have better cache locality that can make them better in terms of performance",
    "d":"It is easy to insert and delete elements in Linked List"
    }
    ],
    "answer": "Access of elements in linked list takes less time than compared to arrays",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which data structure is based on the Last In First Out (LIFO) principle?",
    "options": [
    {
    "a": "Tree",
    "b": "Linked List",
    "c": "Stack",
    "d" : "Queue"
    }
    ],
    "answer": "Stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which of the following application makes use of a circular linked list?",
    "options": [
    {
    "a": "Recursive function calls",
    "b": "Undo operation in a text editor",
    "c": "Implement Hash Tables",
    "d" : "Allocating CPU to resources"
    }
    ],
    "answer": "Allocating CPU to resources",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is a bit array?",
    "options": [
    {
    "a": "Data structure that compactly stores bits",
    "b": "Data structure for representing arrays of records",
    "c": "Data structure for representing arrays of records",
    "d": "An array in which most of the elements have the same value",
    }
    ],
    "answer": "Data structure that compactly stores bits",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which of the following tree data structures is not a balanced binary tree?",
    "options": [
    {
    "a": "Splay tree",
    "b": "B-tree",
    "c": "AVL tree",
    "d" : "Red-black tree"
    }
    ],
    "answer": "B-tree",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which of the following is not the type of queue?",
    "options": [
    {
    "a": "Priority queue",
    "b": "Circular queue",
    "c": "Single ended queue",
    "d":"Ordinary queue"
    }
    ],
    "answer": "Single ended queue",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which of the following data structures can be used for parentheses matching?",
    "options": [
    {
    "a": "n-ary tree",
    "b": "queue",
    "c": "priority queue",
    "d": "stack",
    }
    ],
    "answer": "stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which algorithm is used in the top tree data structure?",
    "options": [
    {
    "a": "Backtracking",
    "b": "Divide and Conquer",
    "c": "Branch",
    "d": "Greedy"
    }
    ],
    "answer": "Divide and Conquer",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which of the following is also known as Rope data structure?",
    "options": [
    {
    "a": "Linked List",
    "b": "Array",
    "c": "String",
    "d": "Cord",
    }
    ],
    "answer": "Cord",
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