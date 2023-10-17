var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "If John's father is Mary's brother, what is John to Mary?",
            "options": [
                { "a": "Cousin", "b": "Nephew", "c": "Son", "d": "Brother" }
            ],
            "answer": "a) Cousin",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Mary's son is Jake's father. What is Mary to Jake?",
            "options": [
                { "a": "Grandmother", "b": "Mother", "c": "Aunt", "d": "Sister" }
            ],
            "answer": "b) Mother",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "If Susan is the sister of Mike and the daughter of Alice, what is Alice to Mike?",
            "options": [
                { "a": "Mother", "b": "Aunt", "c": "Grandmother", "d": "Sister" }
            ],
            "answer": "a) Mother",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "If Sam is Jessica's husband, what is Jessica's father-in-law's relationship to her?",
            "options": [
                { "a": "Father", "b": "Husband", "c": "Son", "d": "Brother" }
            ],
            "answer": "a) Father",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "If Lisa is Sally's niece, what is Lisa's mother's relationship to Sally?",
            "options": [
                { "a": "Sister", "b": "Aunt", "c": "Mother", "d": "Daughter" }
            ],
            "answer": "b) Aunt",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "If John is Mary's brother and Mary is Peter's sister, what is the relationship between John and Peter?",
            "options": [
                { "a": "Cousins", "b": "Siblings", "c": "Father and son", "d": "Uncle and nephew" }
            ],
            "answer": "b) Siblings",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "If Kevin's father is Jane's husband, what is Jane to Kevin?",
            "options": [
                { "a": "Mother", "b": "Sister", "c": "Daughter", "d": "Aunt" }
            ],
            "answer": "a) Mother",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "If Paul is Sarah's son, what is Paul's relationship to Sarah's sister?",
            "options": [
                { "a": "Nephew", "b": "Cousin", "c": "Brother", "d": "Son" }
            ],
            "answer": "a) Nephew",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "If Lucy's mother is Emily's daughter, what is the relationship between Lucy and Emily?",
            "options": [
                { "a": "Sisters", "b": "Mother and daughter", "c": "Aunt and niece", "d": "Cousins" }
            ],
            "answer": "b) Mother and daughter",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "If Tom is David's son, what is the relationship between Tom and David's brother?",
            "options": [
                { "a": "Nephew", "b": "Son", "c": "Cousin", "d": "Brother" }
            ],
            "answer": "a) Nephew",
            "score": 0,
            "status": ""
        }
    ]
};
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