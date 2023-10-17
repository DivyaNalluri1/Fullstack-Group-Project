var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the formula for conditional probability?",
    "options": [
    {
    "a": "P(A and B) / P(A)",
    "b": "P(A and B) * P(A)",
    "c": "P(A | B) = P(A and B)",
    "d": "P(B | A) * P(A)"
    }
    ],
    "answer": "P(A and B) / P(A)",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "If events A and B are independent, what is P(A and B)?",
    "options": [
    {
    "a": "P(A | B)",
    "b": "P(A) * P(B)",
    "c": "P(A) / P(B)",
    "d":"P(A) - P(B)"
    }
    ],
    "answer": "P(A) * P(B)",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Bayes' Theorem is used to:",
    "options": [
    {
    "a": "Calculate expected values",
    "b": "Determine the variance of a random variable",
    "c": "Update probabilities based on new evidence",
    "d" : "Find the standard deviation"
    }
    ],
    "answer": "Update probabilities based on new evidence",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "The Law of Total Probability is used to:",
    "options": [
    {
    "a": "Calculate conditional probabilities",
    "b": "Sum over all possible events to find the total probability",
    "c": "Determine the mean of a random variable",
    "d" : "Find the variance of a distribution"
    }
    ],
    "answer": "Sum over all possible events to find the total probability",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "If two events are mutually exclusive, what is the probability that both events occur?",
    "options": [
    {
    "a": "P(A | B)",
    "b": "P(A and B)",
    "c": "P(A or B)",
    "d": "P(A and B) = 0",
    }
    ],
    "answer": "P(A and B) = 0",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "What is the formula for the expected value of a discrete random variable X?",
    "options": [
    {
    "a": "E(X) = Σ [x * P(X=x)]",
    "b": "E(X) = μ",
    "c": "E(X) = σ",
    "d" : "E(X) = 1 / n"
    }
    ],
    "answer": "E(X) = Σ [x * P(X=x)]",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "7. If X and Y are independent random variables, what is the variancwe of X+Y? ",
    "options": [
    {
    "a": "Var(X) + Var(Y)",
    "b": "Var(X) * Var(Y)",
    "c": "Var(X) - Var(Y)",
    "d":"Var(X+Y) = Var(X) + Var(Y)"
    }
    ],
    "answer": "Var(X) + Var(Y)",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "The linearity of expectation applies to:",
    "options": [
    {
    "a": "Discrete random variables",
    "b": "Continuous random variables",
    "c": "Both discrete and continuous random variables",
    "d": "Neither discrete nor continuous random variables",
    }
    ],
    "answer": "Both discrete and continuous random variables",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "9. What is the variance of a constant 'a' times a random variable X? ",
    "options": [
    {
    "a": "Var(aX) = a^2 * Var(X)",
    "b": "Var(aX) = Var(X) / a",
    "c": "Var(aX) = a * Var(X)",
    "d": "Var(aX) = Var(X) - a"
    }
    ],
    "answer": "Var(aX) = a^2 * Var(X)",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "If g(X) is a function of a random variable X, what is the formula for the expected value of g(X)?",
    "options": [
    {
    "a": "E[g(X)] = Σ [g(x) * P(X=x)]",
    "b": "E[g(X)] = g(X)",
    "c": "E[g(X)] = μ",
    "d": "E[g(X)] = σ",
    }
    ],
    "answer": "E[g(X)] = Σ [g(x) * P(X=x)]",
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