var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "Which word correctly completes the sentence? The __________ of the food was simply irresistible.",
            "options": [
                {
                    "a": "aroma",
                    "b": "appearance",
                    "c": "texture",
                    "d": "cost"
                }
            ],
            "answer": "aroma",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Select the right word to complete the sentence: His __________ vocabulary impressed everyone at the conference.",
            "options": [
                {
                    "a": "limited",
                    "b": "mediocre",
                    "c": "extensive",
                    "d": "ordinary"
                }
            ],
            "answer": "extensive",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which word should fill the blank in this sentence for it to make sense? 'She took a deep breath, closed her eyes, and felt a sense of ________ as she meditated.'",
            "options": [
                {
                    "a": "anxiety",
                    "b": "relaxation",
                    "c": "confusion",
                    "d": "excitement"
                }
            ],
            "answer": "relaxation",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Complete the sentence with the appropriate word: 'The company's decision to adopt eco-friendly practices reflects their commitment to __________ responsibility.'",
            "options": [
                {
                    "a": "corporate",
                    "b": "social",
                    "c": "financial",
                    "d": "individual"
                }
            ],
            "answer": "social",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What can you deduce from this sentence? 'John's constant laughter in the meeting raised suspicions about his __________.'",
            "options": [
                {
                    "a": "sadness",
                    "b": "enthusiasm",
                    "c": "disapproval",
                    "d": "sense of humor"
                }
            ],
            "answer": "enthusiasm",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "In the context of the sentence, what is the likely outcome of the situation? 'The chef added a pinch of salt to the soup to __________.'",
            "options": [
                {
                    "a": "sweeten it",
                    "b": "make it spicier",
                    "c": "enhance the flavor",
                    "d": "ruin the taste"
                }
            ],
            "answer": "enhance the flavor",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "Which word encourages creative thinking to complete the sentence? 'The discovery of the ancient artifact opened the door to endless possibilities and __________.'",
            "options": [
                {
                    "a": "certainties",
                    "b": "limitations",
                    "c": "mysteries",
                    "d": "disappointments"
                }
            ],
            "answer": "mysteries",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What word would stimulate critical thinking in this sentence? 'The complex puzzle required patience, attention to detail, and a high level of __________.'",
            "options": [
                {
                    "a": "simplicity",
                    "b": "chaos",
                    "c": "intelligence",
                    "d": "ambiguity"
                }
            ],
            "answer": "intelligence",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which word describes a personal preference in this sentence? 'In my free time, I enjoy engaging in outdoor activities such as hiking and camping to satisfy my __________ for adventure.'",
            "options": [
                {
                    "a": "aversion",
                    "b": "passion",
                    "c": "apathy",
                    "d": "distaste"
                }
            ],
            "answer": "passion",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "What word reflects a common attitude in the context of the sentence? 'I usually approach new challenges with a sense of __________ and determination.'",
            "options": [
                {
                    "a": "indifference",
                    "b": "fear",
                    "c": "enthusiasm",
                    "d": "defeat"
                }
            ],
            "answer": "enthusiasm",
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