var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the relationship of your father's sister to you?",
    "options": [
    {
    "a": "Aunt",
    "b": "Cousin",    
    "c": "Niece",
    "d":"Grandmother"
    }
    ],
    "answer": "Aunt",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "If A is the brother of B, and B is the sister of C, what is A to C?",
    "options": [
    {
    "a": "Brother",
    "b": " Sister",
    "c": " Cousin",
    "d":" Cannot be determined"
    }
    ],
    "answer": "Brother",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": " If John is the son of Mary's brother, what is John to Mary?",
    "options": [
    {
    "a": "Nephew",
    "b": "Cousin",
    "c": "Son",
    "d" : "Brother"
    }
    ],
    "answer": "Nephew",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": " If P is the son of Q, and Q is the brother of R, what is P to R?",
    "options": [
    {
    "a": "Nephew",
    "b": "Cousin",
    "c": " Son",
    "d" : "Cannot be determined"
    }
    ],
    "answer":" Son",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": " How is your mother's sister's husband related to you?",
    "options": [
    {
    "a": "Uncle",
    "b": "Father",
    "c": "Brother",
    "d": "Cousin",
    }
    ],
    "answer": "Uncle",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "If X is the father of Y, and Y is the sister of Z, what is X to Z?",
    "options": [
    {
    "a": " Father",
    "b": "Brother",
    "c": "Uncle",
    "d" : " Grandfather"
    }
    ],
    "answer": " Father",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "If A is the daughter of B's father, what is the relationship between A and B?",
    "options": [
    {
    "a": " Sisters",
    "b": "Cousins",
    "c": "Mother and daughter",
    "d":"Cannot be determined"
    }
    ],
    "answer": "Mother and daughter",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "If C is the sister of D's husband, how is C related to D? ",
    "options": [
    {
    "a": "Sister",
    "b": "Mother",
    "c": "Aunt",
    "d": "Sister-in-law",
    }
    ],
    "answer": "Sister-in-law",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Question: If E is the maternal uncle of F, what is the gender of F?",
    "options": [
    {
    "a": "Male",
    "b": "Female",
    "c": "Cannot be determined",
    "d": "Both a and b"
    }
    ],
    "answer": "Female",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Question: If G is the grandson of H's mother, what is the relationship between G and H?",
    "options": [
    {
    "a": "Grandmother and grandson",
    "b": "Mother and son",
    "c": "Aunt and nephew",
    "d": " Sister and brother ",
    }
    ],
    "answer": "Grandmother and grandson",
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