/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which sorting algorithm has an average-case time complexity of O(n log n)?",
    "options": [
    {
    "a": "QuickSort",
    "b": "Bubble Sort",    
    "c": "Insertion Sort",
    "d":"Selection Sort"
    }
    ],
    "answer": "QuickSort",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which data structure is often used in hashing algorithms to store key-value pairs?",
    "options": [
    {
    "a": "Stack",
    "b": "Queue",
    "c": "Hash table",
    "d":"Linked list"
    }
    ],
    "answer": "Hash table",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "In the context of greedy algorithms, what does 'optimal substructure' mean?",
    "options": [
    {
    "a": "The algorithm always finds the globally optimal solution",
    "b": "The problem can be broken down into smaller subproblems that also have optimal solutions",
    "c": "The algorithm only considers the current step without regard to future steps",
    "d" : "The problem can only be solved using dynamic programming"
    }
    ],
    "answer": "The problem can be broken down into smaller subproblems that also have optimal solutions",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which algorithm is used to find the maximum contiguous subarray sum in an array of numbers?",
    "options": [
    {
    "a": "Merge Sort",
    "b": "QuickSort",
    "c": "Kadane's Algorithm",
    "d" : "Dijkstra's Algorithm"
    }
    ],
    "answer":"Kadane's Algorithm",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which of the following is an example of a non-comparison sorting algorithm?",
    "options": [
    {
    "a": "Bubble Sort",
    "b": "Quick Sort",
    "c": "Counting Sort",
    "d": "Selection Sort",
    }
    ],
    "answer": "Counting Sort",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which data structure is typically used for implementing a LIFO (Last-In-First-Out) behavior?",
    "options": [
    {
    "a": "Queue",
    "b": "Heap",
    "c": "Stack",
    "d" : "Linked List"
    }
    ],
    "answer": "Stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is the primary goal of Huffman coding in data compression?",
    "options": [
    {
    "a": "Minimize the encoding time",
    "b": "Minimize the decompression time",
    "c": "Minimize the amount of storage required for compressed data",
    "d":"Maximize the encryption strength"
    }
    ],
    "answer": "Minimize the amount of storage required for compressed data",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "In the context of graph algorithms, what is a cycle?",
    "options": [
    {
    "a": "A path that covers all vertices in a graph",
    "b": " A set of edges connecting two vertices",
    "c": "A closed path in the graph where the first and last vertices are the same",
    "d": "None",
    }
    ],
    "answer": "A closed path in the graph where the first and last vertices are the same",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which algorithm is commonly used to solve the traveling salesman problem (TSP)?",
    "options": [
    {
    "a": "Merge Sort",
    "b": "Breadth-First Search",
    "c": "Dijkstra's Algorithm",
    "d": "Branch and Bound"
    }
    ],
    "answer": "Branch and Bound",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which technique is used in divide and conquer algorithms to combine the results of subproblems into a solution for the original problem?",
    "options": [
    {
    "a": "Recursion",
    "b": "Memoization",
    "c": "Greedy choice",
    "d": "Dynamic programming",
    }
    ],
    "answer": "Recursion",
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