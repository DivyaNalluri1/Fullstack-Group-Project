
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "In which ancient civilization was the writing system known as hieroglyphics developed?",
    "options": [
    {
    "a": "Mesopotamia",
    "b": "Egypt",
    "c": "Greece",
    "d": "Rome"
    }
    ],
    "answer": "Egypt",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "The ancient city of Athens is associated with which civilization?",
    "options": [
    {
    "a": "Mesopotamia",
    "b": "Egypt",
    "c": "Greece",
    "d": "Rome"
    }
    ],
    "answer": "Greece",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which event marked the beginning of the American Revolution in 1775?",
    "options": [
    {
    "a": "The signing of the Declaration of Independence",
    "b": "The Boston Tea Party",
    "c": "The Battle of Yorktown",
    "d" : "The Treaty of Paris"
    }
    ],
    "answer": "The Boston Tea Party",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Who wrote the pamphlet 'Common Sense' which played a significant role in influencing American public opinion towards independence?",
    "options": [
    {
    "a": "Thomas Jefferson",
    "b": "Benjamin Franklin",
    "c": "John Adams",
    "d" : "Thomas Paine"
    }
    ],
    "answer": "Thomas Paine",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Who is often referred to as the 'Mother of the Civil Rights Movement' for her role in the Montgomery Bus Boycott?",
    "options": [
    {
    "a": "Rosa Parks",
    "b": "Martin Luther King Jr.",
    "c": "Malcolm X",
    "d": "D. Harriet Tubman",
    }
    ],
    "answer": "Rosa Parks",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "The 1963 March on Washington for Jobs and Freedom is most famous for what?",
    "options": [
    {
    "a": "The signing of the Civil Rights Act",
    "b": "Malcolm X's speech",
    "c": "Martin Luther King Jr.'s 'I Have a Dream' speech ",
    "d" : "The passage of the Voting Rights Act"
    }
    ],
    "answer": "Martin Luther King Jr.'s 'I Have a Dream' speech ",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "In which political system does the power rest with a single ruler or a small group of individuals who often hold absolute authority?",
    "options": [
    {
    "a": "Democracy",
    "b": "Authoritarianism",
    "c": "Federalism",
    "d":"Communism"
    }
    ],
    "answer": "Authoritarianism",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which political system allows for direct participation by citizens in decision-making through voting on laws and policies?",
    "options": [
    {
    "a": "Democracy",
    "b": "Monarchy",
    "c": "Communism",
    "d": "Oligarchy"
    }
    ],
    "answer": "Democracy",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "The United Nations was established in the aftermath of which major event? ",
    "options": [
    {
    "a": "World War I",
    "b": "World War II",
    "c": "Cold War",
    "d": ""
    }
    ],
    "answer": "World War II",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "What theory proposes that the universe began as a singularity and has been expanding ever since?",
    "options": [
    {
    "a": "Big Bang Theory",
    "b": "Steady State Theory",
    "c": "Ptolemaic Theory",
    "d": "Geocentric Theory",
    }
    ],
    "answer": "Big Bang Theory",
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