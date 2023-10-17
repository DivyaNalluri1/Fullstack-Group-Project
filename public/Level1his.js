
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What was the primary goal of the Marshall Plan, introduced by the United States after World War II?",
    "options": [
    {
    "a": "To provide military aid to European nations",
    "b": "To promote economic recovery and stability in war-torn Europe",
    "c": "To establish a global alliance against communism",
    "d": "To support the United Nations' peacekeeping efforts"
    }
    ],
    "answer": "To promote economic recovery and stability in war-torn Europe",
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
    "question": "What is the primary economic ideology associated with communism?",
    "options": [
    {
    "a": "Capitalism",
    "b": "Socialism",
    "c": "Laissez-faire",
    "d" : "State ownership of the means of production"
    }
    ],
    "answer": "State ownership of the means of production",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which of the following is not a form of government in which a monarch holds power?",
    "options": [
    {
    "a": "Absolute monarchy",
    "b": "Constitutional monarchy",
    "c": "Parliamentary republic",
    "d" : "Autocracy"
    }
    ],
    "answer": "Parliamentary republic",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which event marked the end of legalized racial segregation in the United States and is considered a turning point in the Civil Rights Movement?",
    "options": [
    {
    "a": "Brown v. Board of Education",
    "b": "Montgomery Bus Boycott",
    "c": "Selma to Montgomery marches",
    "d": "Emancipation Proclamation",
    }
    ],
    "answer": "Brown v. Board of Education",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which civil rights leader co-founded the Southern Christian Leadership Conference (SCLC) to promote nonviolent protest and civil rights activism?",
    "options": [
    {
    "a": "Malcolm X",
    "b": "B. Rosa Parks",
    "c": "John Lewis",
    "d" : "D. Martin Luther King Jr."
    }
    ],
    "answer": "D. Martin Luther King Jr.",
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
    "question": "The shot heard 'round the world' refers to the opening shots fired in which battle of the American Revolution?",
    "options": [
    {
    "a": "Battle of Saratoga",
    "b": "Battle of Bunker Hill",
    "c": "Battle of Lexington and Concord ",
    "d": "Battle of Yorktown"
    }
    ],
    "answer": "Battle of Lexington and Concord ",
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
    "d": "Korean War"
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