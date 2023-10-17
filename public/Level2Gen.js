
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "According to Einstein's theory of relativity, what happens to time as an object approaches the speed of light?",
    "options": [
    {
    "a": "Time slows down",
    "b": "Time speeds up",
    "c": "Time remains constant",
    "d": "Time becomes unpredictable"
    }
    ],
    "answer": "Time slows down",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What type of energy is associated with the motion of particles within a substance?",
    "options": [
    {
    "a": "Thermal energy",
    "b": "Potential energy",
    "c": "Mechanical energy",
    "d": "Electromagnetic energy"
    }
    ],
    "answer": "Thermal energy",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which of the following is a strong acid?",
    "options": [
    {
    "a": "Vinegar (acetic acid) ",
    "b": "Lemon juice (citric acid)",
    "c": "Hydrochloric acid (HCl)",
    "d" : "Baking soda (sodium bicarbonate)"
    }
    ],
    "answer": "Hydrochloric acid (HCl)",
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
    "question": "What is the molecule that carries genetic information and is responsible for inheritance?",
    "options": [
    {
    "a": "Protein",
    "b": "RNA",
    "c": "DNA",
    "d": "Enzyme",
    }
    ],
    "answer": "DNA",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "What is the term for a sudden shaking of the Earth's crust caused by the release of energy in the form of seismic waves?",
    "options": [
    {
    "a": "Tornado",
    "b": "Hurricane",
    "c": "Earthquake",
    "d" : "Tsunami"
    }
    ],
    "answer": "Earthquake",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which of the following is a type of renewable energy derived from the heat of the Earth's interior?",
    "options": [
    {
    "a": "Solar power",
    "b": "Wind power",
    "c": "Geothermal energy",
    "d":"Nuclear power"
    }
    ],
    "answer": "Geothermal energy",
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
    "question": "Which galaxy is the Milky Way's closest neighbor in space?",
    "options": [
    {
    "a": "Andromeda",
    "b": "Triangulum",
    "c": "Whirlpool",
    "d": "Mars"
    }
    ],
    "answer": "Andromeda",
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