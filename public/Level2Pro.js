var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What is the probability of rolling a six on a fair six-sided die?",
            "options": [
                { "a": "1/6", "b": "1/3", "c": "1/2", "d": "1/4" }
            ],
            "answer": "a) 1/6",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "You have a standard deck of 52 playing cards. What is the probability of drawing a red card (hearts or diamonds)?",
            "options": [
                { "a": "1/2", "b": "1/4", "c": "1/3", "d": "2/3" }
            ],
            "answer": "c) 1/2",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "In a bag, there are 8 red balls and 4 green balls. What is the probability of drawing a green ball?",
            "options": [
                { "a": "1/4", "b": "1/3", "c": "2/3", "d": "1/2" }
            ],
            "answer": "b) 1/3",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "If you flip a fair coin three times, what is the probability of getting exactly two heads?",
            "options": [
                { "a": "1/8", "b": "3/8", "c": "3/4", "d": "1/4" }
            ],
            "answer": "b) 3/8",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "A box contains 5 white balls, 4 black balls, and 3 red balls. If one ball is drawn at random, what is the probability of it being black?",
            "options": [
                { "a": "1/3", "b": "4/12", "c": "1/4", "d": "2/7" }
            ],
            "answer": "b) 4/12",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "You roll two fair six-sided dice. What is the probability that the sum of the two dice is 7?",
            "options": [
                { "a": "1/6", "b": "1/12", "c": "1/3", "d": "5/36" }
            ],
            "answer": "c) 1/3",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "If you randomly select a card from a standard deck, what is the probability of drawing a face card (king, queen, or jack)?",
            "options": [
                { "a": "3/13", "b": "3/26", "c": "3/52", "d": "12/52" }
            ],
            "answer": "d) 12/52",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "You have a bag with 5 marbles: 2 red, 1 green, 1 blue, and 1 yellow. If you pick two marbles without replacement, what is the probability that both are red?",
            "options": [
                { "a": "1/10", "b": "2/5", "c": "1/5", "d": "1/2" }
            ],
            "answer": "c) 1/5",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "A committee of 4 people is to be chosen from 5 men and 6 women. What is the probability that the committee has exactly 3 women?",
            "options": [
                { "a": "5/11", "b": "6/11", "c": "7/11", "d": "1/11" }
            ],
            "answer": "b) 6/11",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "If you have a bag with 10 balls, 4 of which are red and 6 are blue, what is the probability of drawing a red ball and then a blue ball without replacement?",
            "options": [
                { "a": "2/9", "b": "4/15", "c": "4/9", "d": "4/11" }
            ],
            "answer": "c) 4/9",
            "score": 0,
            "status": ""
        }
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

