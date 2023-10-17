var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What is the correct word to complete the sentence? The ____ of the story left the audience in awe.",
            "options": [
                {
                    "a": "conclusion",
                    "b": "disappointment",
                    "c": "climax",
                    "d": "inception"
                }
            ],
            "answer": "climax",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Choose the appropriate word to fill in the blank: Her __________ in mathematics allowed her to solve the complex problem easily.",
            "options": [
                {
                    "a": "proficiency",
                    "b": "incompetence",
                    "c": "indifference",
                    "d": "expertise"
                }
            ],
            "answer": "proficiency",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "In the following sentence, which word would best complete the blank to maintain the context? 'The detective examined the crime scene carefully, looking for any ________ that might lead to the suspect.'",
            "options": [
                {
                    "a": "evidence",
                    "b": "clue",
                    "c": "person",
                    "d": "alibi"
                }
            ],
            "answer": "clue",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "What is the most appropriate word to fill in the blank in the sentence? 'The children played in the __________, building sandcastles and splashing in the waves.'",
            "options": [
                {
                    "a": "forest",
                    "b": "garden",
                    "c": "beach",
                    "d": "mountains"
                }
            ],
            "answer": "beach",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Based on the context, what can be inferred from the following sentence? 'The student aced all of his exams, and his classmates were in awe of his ________.'",
            "options": [
                {
                    "a": "lack of effort",
                    "b": "intelligence and hard work",
                    "c": "procrastination",
                    "d": "bad luck"
                }
            ],
            "answer": "intelligence and hard work",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "What is the logical inference from this sentence? 'She checked the weather forecast, packed an umbrella, and put on a raincoat, anticipating ________.'",
            "options": [
                {
                    "a": "a sunny day",
                    "b": "cold weather",
                    "c": "a storm or rain",
                    "d": "a snowfall"
                }
            ],
            "answer": "a storm or rain",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "Which word best completes the sentence to encourage critical thinking? 'The sudden disappearance of the treasure map raised questions about its __________.'",
            "options": [
                {
                    "a": "authenticity",
                    "b": "age",
                    "c": "beauty",
                    "d": "simplicity"
                }
            ],
            "answer": "authenticity",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What word would provoke critical thinking to complete this sentence? 'The curious case left the detective with more __________ than answers.'",
            "options": [
                {
                    "a": "clarity",
                    "b": "puzzles",
                    "c": "conclusions",
                    "d": "confusion"
                }
            ],
            "answer": "confusion",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What word best expresses self-perception in this sentence? 'In social situations, I often feel a sense of __________.'",
            "options": [
                {
                    "a": "confidence",
                    "b": "insecurity",
                    "c": "humor",
                    "d": "determination"
                }
            ],
            "answer": "insecurity",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which word reflects a personality trait in the context of the sentence? 'When faced with a challenge, I rely on my __________ to persevere.'",
            "options": [
                {
                    "a": "laziness",
                    "b": "resilience",
                    "c": "introversion",
                    "d": "complacency"
                }
            ],
            "answer": "resilience",
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