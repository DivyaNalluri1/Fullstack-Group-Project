
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "(.00825 of 23/5), when expressed as a vulgar fraction, equals :",
    "options": [
    {
    "a": "759/20000",
    "b": "756/20000",
    "c": "759/2000",
    "d": "765/2000"
    }
    ],
    "answer": " 759/20000",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Simplify: (1.7 X 1.7 + 0.3 X 0.3 + 1.02) / 2",
    "options": [
    {
    "a": "1.4",
    "b": "0.3",
    "c": "2",
    "d":"3"
    }
    ],
    "answer": "2",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "The sum of the first 20 terms of the series 1/(4 X 5) + 1/(5 X 6) + … is:",
    "options": [
    {
    "a": "0.209",
    "b": "2.09",
    "c": "0.2",
    "d" : "20.9"
    }
    ],
    "answer": "0.209",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "The difference between two numbers is 1550. If 8 % of one number is 10 % of the other number, then find the two numbers ",
    "options": [
    {
    "a": "4973, 6523",
    "b": "5450, 7000",
    "c": "6200, 7750",
    "d" : "6500, 4950"
    }
    ],
    "answer": "6200, 7750",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "The value of lathe machine depreciates at the rate of 10 % per annum. If the cost of machine at present is Rs. 160,000, then what will be its worth after 2 years?",
    "options": [
    {
    "a": " Rs. 122,365",
    "b": "Rs. 129,600",
    "c": "Rs. 153,680",
    "d": "Rs. 119,900",
    }
    ],
    "answer": "Rs. 129,600",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "The total population of a city is 6500.The number of males and females increases by 5 % and 10 % respectively and consequently the population becomes 7000. Find the number of males in the village.",
    "options": [
    {
    "a": "4000",
    "b": "3000",
    "c": "3500",
    "d" : "2950"
    }
    ],
    "answer": "3000",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
    "options": [
    {
    "a": "3:4",
    "b": "7:8",
    "c": "8:9",
    "d":"None of these"
    }
    ],
    "answer": "3:4",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "5600 is to be divided into A, B, C, and D in such a way that the ratio of share of A: B is 1: 2, B: C is 3: 1, and C: D is 2: 3. Find the sum of (A and C) and (B and C).",
    "options": [
    {
    "a": "Rs 2400, Rs 3000",
    "b": "Rs 2000, Rs 3000",
    "c": "Rs 2400, Rs 3200",
    "d": "Rs 2000, Rs 3200",
    }
    ],
    "answer": "Rs 2000, Rs 3200",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Salaries of Ravi and Sumit are in the ratio 2 : 3. If the salary of each is increased by Rs. 4000, the new ratio becomes 40 : 57. What is Sumit's salary?",
    "options": [
    {
    "a": "17,000",
    "b": "20,000",
    "c": "25,500",
    "d": "38,000"
    }
    ],
    "answer": "38,000",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "In a mixture 60 litres, the ratio of milk and water 2 : 1. If this ratio is to be 1 : 2, then the quantity of water to be further added is:",
    "options": [
    {
    "a": "20 litres",
    "b": "30 litres",
    "c": "40 litres",
    "d": "60 litres",
    }
    ],
    "answer": "60 litres",
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