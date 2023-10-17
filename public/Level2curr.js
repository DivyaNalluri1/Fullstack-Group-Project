/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What was the focus of the 'Poshan Abhiyan' launched by the Government of India?",
    "options": [
    {
    "a": "Clean drinking water supply ",
    "b": "Maternal and child nutrition",
    "c": "Swachh Bharat",
    "d": "Financial inclusion"
    }
    ],
    "answer": "Maternal and child nutrition",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which state in India launched the 'Mukhyamantri Chiranjeevi Swasthya Bima Yojana,' a health insurance scheme for the poor?",
    "options": [
    {
    "a": "Uttar Pradesh",
    "b": "Rajastan",
    "c": "Madhya Pradesh",
    "d":"Gujarat"
    }
    ],
    "answer": "Rajastan",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Who is the President of India as of 2023?",
    "options": [
    {
    "a": "Pranab Mukherjee",
    "b": "Murmu",
    "c": "Narendra Modi",
    "d" : "Sonia Gandhi"
    }
    ],
    "answer": "Murmu",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which Indian city hosted the 13th BRICS Summit in 2021?",
    "options": [
    {
    "a": "Mumbai",
    "b": "New Delhi",
    "c": "bengaluru",
    "d" : "Hyderabad"
    }
    ],
    "answer": "New Delhi",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Who is the Chief Justice of India in 2021?",
    "options": [
    {
    "a": "Ranjan Gogoi",
    "b": "Sharad Arvind Bobde",
    "c": "N. V. Ramana",
    "d": "Dipak Misra",
    }
    ],
    "answer": "N. V. Ramana",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": " Which Indian state was the first to implement a ban on single-use plastics?",
    "options": [
    {
    "a": "Maharashtra",
    "b": "Kerala",
    "c": "Tamilnadu",
    "d" : "Himachal Pradesh"
    }
    ],
    "answer": "Maharashtra",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "4th G20 Culture Working Group (CWG) Meeting was held at which place of India?",
    "options": [
    {
    "a": "Varanasi",
    "b": "New Delhi",
    "c": "Mumbai",
    "d":"Gandhi Nagar"
    }
    ],
    "answer": "Varanasi",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What was the chosen theme for Delhi’s Red Fort during the 77th Independence Day celebrations",
    "options": [
    {
    "a": "Nation First, Always First",
    "b": "Unity in Diversity",
    "c": "Freedom and Equality",
    "d": "Progress and Prosperity"
    }
    ],
    "answer": "Nation First, Always First",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "'Intersolar Europe 2023' exhibition held in which country?",
    "options": [
    {
    "a": "Germany",
    "b": "France",
    "c": "United States",
    "d": "China"
    }
    ],
    "answer": "Germany",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "To assist coastal communities across the country in combating climate change, which country announced investments of over 600 million dollars?",
    "options": [
    {
    "a": "Australia",
    "b": "United States",
    "c": "Canada",
    "d": "India",
    }
    ],
    "answer": "United States",
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