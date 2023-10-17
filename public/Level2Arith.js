/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": " {0.03/0.15 – 0.15/0.03}3 = ?",
    "options": [
    {
    "a": "140.7",
    "b": "140.6",
    "c": "140.8",
    "d": "140"
    }
    ],
    "answer": " 140.6",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "The value of 1/6 + 1/(6X7) + 1/(6X7X8) correct to 3 decimal places is :",
    "options": [
    {
    "a": "0.193",
    "b": "0.3",
    "c": "0.19",
    "d":"0.194"
    }
    ],
    "answer": "0.193",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": " When .48 is written in simplest fractional form, the sum of the numerator and denominator is :",
    "options": [
    {
    "a": "35",
    "b": "34",
    "c": "37.2",
    "d" : "37"
    }
    ],
    "answer": "37",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "A person buys a pen from a wholesaler at Rs. 10 for 20 pens. He sells those pens at Rs. 10 for 15 pens. Find his profit or loss percent.",
    "options": [
    {
    "a": "22.224%",
    "b": "26.664%",
    "c": "31.114%",
    "d" : "33.334%"
    }
    ],
    "answer": "33.334%",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": " If the cost price of an article is 67 % of the selling price, what is the profit percent?",
    "options": [
    {
    "a": "49.25%",
    "b": "49.00%",
    "c": "49.50%",
    "d": "49.75%",
    }
    ],
    "answer": "49.25%",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "50 % of a number is 18 less than two-third of that number. Find the number.",
    "options": [
    {
    "a": "123",
    "b": "119",
    "c": "115",
    "d" : "108"
    }
    ],
    "answer": "108",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "The value of Xerox machine depreciates at the rate of 10 % per annum. If the cost of machine at present is Rs. 75,000 then what was the value of machine before 2 years?",
    "options": [
    {
    "a": "90000",
    "b": "92600",
    "c": "93800",
    "d":"95000"
    }
    ],
    "answer":"92600",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "The present population of a country is 10 crores. If it rises to 17.28 crores during next 3 years, then find uniform rate of growth in population.",
    "options": [
    {
    "a": "20%",
    "b": "30%",
    "c": "40%",
    "d": "60%"
    }
    ],
    "answer": "20%",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": " Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:",
    "options": [
    {
    "a": "2:5",
    "b": "3:5",
    "c": "4:5",
    "d": "6:7"
    }
    ],
    "answer": "4:5",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question":" The ratio of the number of boys and girls in a college is 7 : 8. If the percentage increase in the number of boys and girls be 20% and 10% respectively, what will be the new ratio?",
    "options": [
    {
    "a": "8:9",
    "b": "17:18",
    "c": "21:22",
    "d": "cannot be determined",
    }
    ],
    "answer": "21:22",
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