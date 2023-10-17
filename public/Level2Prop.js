var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "If 25% of a number is 50, what is 40% of that same number?",
            "options": [
                {
                    "a": "20",
                    "b": "30",
                    "c": "40",
                    "d": "50"
                }
            ],
            "answer": "30",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "A computer is on sale for 15% off its original price of $800. What is the sale price?",
            "options": [
                {
                    "a": "$120",
                    "b": "$680",
                    "c": "$720",
                    "d": "$840"
                }
            ],
            "answer": "$720",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "If 15% of a number is 45, what is 30% of the same number?",
            "options": [
                {
                    "a": "60",
                    "b": "90",
                    "c": "120",
                    "d": "135"
                }
            ],
            "answer": "60",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "If 20% of a solution is alcohol, how many milliliters of alcohol are in 250 mL of the solution?",
            "options": [
                {
                    "a": "25 mL",
                    "b": "50 mL",
                    "c": "100 mL",
                    "d": "200 mL"
                }
            ],
            "answer": "50 mL",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "If a recipe calls for 1 cup of sugar and you want to make half of the recipe, how many tablespoons of sugar should you use (1 cup = 16 tablespoons)?",
            "options": [
                {
                    "a": "4 tablespoons",
                    "b": "6 tablespoons",
                    "c": "8 tablespoons",
                    "d": "10 tablespoons"
                }
            ],
            "answer": "8 tablespoons",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "If you earn $500 per week and save 20% of your income, how much money will you save in a month?",
            "options": [
                {
                    "a": "$50",
                    "b": "$100",
                    "c": "$200",
                    "d": "$400"
                }
            ],
            "answer": "$200",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "A bicycle originally cost $300. If it is currently priced at 80% of its original cost, what is the sale price?",
            "options": [
                {
                    "a": "$240",
                    "b": "$270",
                    "c": "$300",
                    "d": "$320"
                }
            ],
            "answer": "$270",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "If a piece of land has appreciated in value by 10% each year for the past 5 years, what is its current value if it was originally worth $10,000?",
            "options": [
                {
                    "a": "$16,105",
                    "b": "$16,610",
                    "c": "$16,806",
                    "d": "$17,161"
                }
            ],
            "answer": "$16,610",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "If a recipe calls for 2 cups of flour and you have 1.5 cups, what percentage of the flour do you have?",
            "options": [
                {
                    "a": "25%",
                    "b": "50%",
                    "c": "75%",
                    "d": "150%"
                }
            ],
            "answer": "75%",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "A student scored 75% on one test and 85% on another test. What is their average score (rounded to the nearest whole number)?",
            "options": [
                {
                    "a": "75%",
                    "b": "80%",
                    "c": "82%",
                    "d": "85%"
                }
            ],
            "answer": "82%",
            "score": 0,
            "status": ""
        },
    ]
}

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