var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What does receptive vocabulary refer to?",
            "options": [
                {
                    "a": "Words used actively in speaking",
                    "b": "Words understood when reading or listening",
                    "c": "Words that are outdated",
                    "d": "Words used in academic settings"
                }
            ],
            "answer": "Words understood when reading or listening",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which of the following is an example of receptive vocabulary?",
            "options": [
                {
                    "a": "A word you frequently use when speaking",
                    "b": "A word you can understand while reading a book",
                    "c": "A word specific to a particular field",
                    "d": "A word you only encounter in academic texts"
                }
            ],
            "answer": "A word you can understand while reading a book",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "What does expressive vocabulary refer to?",
            "options": [
                {
                    "a": "Words understood when reading",
                    "b": "Words used actively in speaking or writing",
                    "c": "Words specific to a certain industry",
                    "d": "Academic terms"
                }
            ],
            "answer": "Words used actively in speaking or writing",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which of the following is an example of expressive vocabulary?",
            "options": [
                {
                    "a": "A word you understand but rarely use in conversation",
                    "b": "A word specific to computer programming",
                    "c": "A word from a medical textbook",
                    "d": "A word you use when speaking or writing"
                }
            ],
            "answer": "A word you use when speaking or writing",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What is academic vocabulary primarily used for?",
            "options": [
                {
                    "a": "Everyday conversations",
                    "b": "Writing fiction",
                    "c": "Educational settings and academic texts",
                    "d": "Technical reports"
                }
            ],
            "answer": "Educational settings and academic texts",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which of the following is an example of academic vocabulary?",
            "options": [
                {
                    "a": "Everyday words like 'dog' and 'house'",
                    "b": "Scientific terms like 'photosynthesis' and 'hypothesis'",
                    "c": "Computer programming jargon",
                    "d": "Slang and colloquial expressions"
                }
            ],
            "answer": "Scientific terms like 'photosynthesis' and 'hypothesis'",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "What does technical vocabulary encompass?",
            "options": [
                {
                    "a": "Everyday words used in general communication",
                    "b": "Words specific to certain fields or industries",
                    "c": "Academic terms",
                    "d": "Slang and colloquial expressions"
                }
            ],
            "answer": "Words specific to certain fields or industries",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which of the following is an example of technical vocabulary?",
            "options": [
                {
                    "a": "Words like 'book' and 'run'",
                    "b": "Medical terms like 'anesthesia' and 'syndrome'",
                    "c": "Common academic words like 'research' and 'analysis'",
                    "d": "Words used in poetry"
                }
            ],
            "answer": "Medical terms like 'anesthesia' and 'syndrome'",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is general vocabulary mainly used for?",
            "options": [
                {
                    "a": "Academic writing",
                    "b": "Everyday communication",
                    "c": "Technical reports",
                    "d": "Specific industries"
                }
            ],
            "answer": "Everyday communication",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which of the following is an example of general vocabulary?",
            "options": [
                {
                    "a": "Words like 'laptop' and 'software'",
                    "b": "Everyday words like 'table' and 'friend'",
                    "c": "Medical terms like 'diagnosis' and 'prescription'",
                    "d": "Technical jargon used in computer programming"
                }
            ],
            "answer": "Everyday words like 'table' and 'friend'",
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

