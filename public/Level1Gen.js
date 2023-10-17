
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What are the three fundamental laws that govern motion and force, as formulated by Sir Isaac Newton?",
    "options": [
    {
    "a": "Kepler's Laws",
    "b": "Maxwell's Equations",
    "c": "Ohm's Laws",
    "d": "Newton's Laws"
    }
    ],
    "answer": "Newton's Laws",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which branch of physics deals with the behavior of particles at the atomic and subatomic scales?",
    "options": [
    {
    "a": "Thermodynamics",
    "b": "Classical Mechanics",
    "c": "Quantum Mechanics",
    "d": "Electromagnetism"
    }
    ],
    "answer": "Quantum Mechanics",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is the process by which a solid changes directly into a gas without first becoming a liquid called?",
    "options": [
    {
    "a": "Sublimation",
    "b": "Vaporization",
    "c": "Condensation",
    "d" : "Evaporation"
    }
    ],
    "answer": "Sublimation",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "In a covalent bond, atoms share:",
    "options": [
    {
    "a": "Electrons",
    "b": "Protons",
    "c": "Neutrons",
    "d" : "Positrons"
    }
    ],
    "answer": "Electrons",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is the fundamental unit of life?",
    "options": [
    {
    "a": "Gene",
    "b": "Cell",
    "c": "Organ",
    "d": "Organism",
    }
    ],
    "answer": "Cell",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which scientist is known for formulating the theory of natural selection?",
    "options": [
    {
    "a": "Gregor Mendel",
    "b": "Charles Darwin",
    "c": "Louis Pasteur",
    "d" : "Rosalind Franklin"
    }
    ],
    "answer": "Charles Darwin",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is the process by which rocks and soil are moved from one place to another by natural forces?",
    "options": [
    {
    "a": "Erosion",
    "b": "Volcanism",
    "c": "Sedimentation",
    "d":"Crystallization"
    }
    ],
    "answer": "Erosion",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which layer of Earth's atmosphere is closest to the planet's surface?",
    "options": [
    {
    "a": "Thermosphere",
    "b": "Stratosphere",
    "c": "Troposphere",
    "d": "Mesosphere"
    }
    ],
    "answer": "Troposphere",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is the largest planet in our solar system?",
    "options": [
    {
    "a": "Earth",
    "b": "Venus",
    "c": "Jupiter",
    "d": "Mars"
    }
    ],
    "answer": "Jupiter",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which star is at the center of our solar system?",
    "options": [
    {
    "a": "Alpha Centauri",
    "b": "Sirius",
    "c": "Polaris",
    "d": "The Sun",
    }
    ],
    "answer": "The Sun",
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