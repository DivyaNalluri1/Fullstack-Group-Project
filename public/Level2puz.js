var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "I'm a three-letter word, and I'm written with two letters. I'm a drink that is served in the bar, but I'm not an alcoholic beverage. What am I?",
            "options": [
                {
                    "a": "Tea'",
                    "b": "Ale",
                    "c": "Rum",
                    "d": "cola"
                }
            ],
            "answer": "Tea",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": " I'm a word of letters three, and my first two letters refer to a male. My last letter comes after 'B' in the alphabet. What word am I?",
            "options": [
                {
                    "a": "Her",
                    "b": "His",
                    "c": "You",
                    "d": "She"
                }
            ],
            "answer": "His",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
            "options": [
                {
                    "a": "A tree",
                    "b": "A fire",
                    "c": "A rock",
                    "d": "A balloon"
                }
            ],
            "answer": "A fire",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": " I have keys but can't open locks, and I have space but no room. I allow you to enter but not go inside. What am I?",
            "options": [
                {
                    "a": "Keyboard",
                    "b": "Money",
                    "c": "Secrets",
                    "d": "map"
                }
            ],
            "answer": "map",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "I'm the only word in the English language that is spelled with three consecutive double letters. What word am I?",
            "options": [
                {
                    "a": "Mississippi",
                    "b": "An echo",
                    "c": "A radio",
                    "d": "A mountain"
                }
            ],
            "answer": "Mississippi",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": " I have cities, but no houses. I have forests, but no trees. I have rivers, but no water. What am I?",
            "options": [
                {
                    "a": "A keyboard",
                    "b": "A map",
                    "c": "A treasure chest",
                    "d": "A bicycle"
                }
            ],
            "answer": "A map",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "I can be cracked, made, told, and played. What am I?",
            "options": [
                {
                    "a": "A joke",
                    "b": "A candle",
                    "c": "A book",
                    "d": "A mountain"
                }
            ],
            "answer": "A joke",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "I am taken from a mine and get transformed, but I am never able to change my state. What am I?",
            "options": [
                {
                    "a": "A diamond",
                    "b": "Gold",
                    "c": "Coal",
                    "d": "Silver"
                }
            ],
            "answer": "Coal",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What comes once in a year, twice in a week, but never in a day?",
            "options": [
                {
                    "a": "The letter 'E'",
                    "b": "A leap year",
                    "c": "A birthday",
                    "d": "A paycheck"
                }
            ],
            "answer": "The letter 'E'",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "I am always hungry; I must always be fed. The finger I touch will soon turn red. What am I?",
            "options": [
                {
                    "a": "fire",
                    "b": "A shadow",
                    "c": "A river",
                    "d": "A snowflake"
                }
            ],
            "answer": "fire",
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