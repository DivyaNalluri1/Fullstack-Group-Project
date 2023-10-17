var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is an algorithm?",
    "options": [
    {
    "a": " A programming language",
    "b": "A set of instructions to perform a task",    
    "c": "A data structure",
    "d":"A data"
    }
    ],
    "answer": "A set of instructions to perform a task",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which of the following is not a key characteristic of a good algorithm?",
    "options": [
    {
    "a": "Efficiency",
    "b": "Clarity",
    "c": "Randomness",
    "d":"Finiteness"
    }
    ],
    "answer": "Randomness",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is the time complexity of an algorithm?",
    "options": [
    {
    "a": "The amount of time it takes to execute the algorithm",
    "b": "The number of instructions in the algorithm",
    "c": "The amount of memory used by the algorithm",
    "d" : "A measure of the algorithm's efficiency in terms of input size"
    }
    ],
    "answer": "A measure of the algorithm's efficiency in terms of input size",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which algorithm sorts an array by repeatedly finding the minimum element and moving it to the beginning?",
    "options": [
    {
    "a": "Bubble Sor",
    "b": "Merge Sort",
    "c": "Selection Sort",
    "d" : "Quick Sort"
    }
    ],
    "answer":"Selection Sort",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is the worst-case time complexity of QuickSort?",
    "options": [
    {
    "a": "O(1)",
    "b": "O(n)",
    "c": "O(n log n)",
    "d": "O(n^2)",
    }
    ],
    "answer": "O(n^2)",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which algorithm is used to find the shortest path between nodes in a weighted graph?",
    "options": [
    {
    "a": "Depth-First Search",
    "b": "Breadth-First Search",
    "c": "Dijkstra's Algorithm",
    "d" : " Kruskal's Algorithm"
    }
    ],
    "answer": "Dijkstra's Algorithm",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "In dynamic programming, what is memoization?",
    "options": [
    {
    "a": "The process of writing code comments",
    "b": "A technique to store previously computed results to avoid redundant calculations",
    "c": "A And B",
    "d":"None"
    }
    ],
    "answer": "A technique to store previously computed results to avoid redundant calculations",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which of the following is a greedy algorithm for finding the shortest path in a graph?",
    "options": [
    {
    "a": "Bellman-Ford Algorithm",
    "b": "Floyd-Warshall Algorithm",
    "c": "Dijkstra's Algorithm",
    "d": "Depth-First Search",
    }
    ],
    "answer": "",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "The greedy choice property states that:",
    "options": [
    {
    "a": " A greedy algorithm always produces the optimal solution",
    "b": "Greedy algorithms make locally optimal choices at each step",
    "c": "Greedy algorithms are only applicable to sorting problems",
    "d": "Greedy algorithms are slower than dynamic programming algorithms"
    }
    ],
    "answer": "Greedy algorithms make locally optimal choices at each step",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which problem is an example of a divide and conquer algorithm?",
    "options": [
    {
    "a": "Finding the minimum element in an array",
    "b": "Calculating the sum of an array",
    "c": "Merging two sorted arrays",
    "d": "Multiplying two matrices",
    }
    ],
    "answer": "Multiplying two matrices",
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