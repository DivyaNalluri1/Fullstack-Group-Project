/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": " Which Indian state earlier implemented the 'One Nation One Ration Card' scheme?",
    "options": [
    {
    "a": "Tamilnadu",
    "b": "Kerala",
    "c": "Andhra Pradesh",
    "d": "Haryana"
    }
    ],
    "answer": "Kerala",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "The Statue of Unity, the world's tallest statue, is dedicated to which Indian leader?",
    "options": [
    {
    "a": " Jawaharlal Nehru",
    "b": "Sardar Vallabhbhai Patel",
    "c": "Indira Gandhi",
    "d":"Mahatma Gandhi"
    }
    ],
    "answer": "Sardar Vallabhbhai Patel",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What was the name of the cyclone that hit the western coast of India in May 2021?",
    "options": [
    {
    "a": "Cyclone Amphan",
    "b": "Cyclone Fani",
    "c": "Cyclone Tauktae",
    "d" : "Cyclone Nisarga"
    }
    ],
    "answer": "Cyclone Tauktae",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Who became the first Indian woman to win a silver medal in the Olympics in weightlifting at the 2020 Tokyo Olympics?",
    "options": [
    {
    "a": "P.V Sindhu",
    "b": "Mary Kom",
    "c": "Mirabai Chanu",
    "d" : "Sakshi Malik"
    }
    ],
    "answer": "Mirabai Chanu",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is the focus of the national deep-tech policy introduced by the Indian government?",
    "options": [
    {
    "a": "A Supporting deep tech ventures",
    "b": "Fine-tuning existing startup policies",
    "c": "Both A and B",
    "d": "None of the above",
    }
    ],
    "answer": "Both A and B",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which Indian state hosted the 2023 G20 Summit?",
    "options": [
    {
    "a": "New Delhi",
    "b": "Mumbai",
    "c": "Chennai",
    "d" : "Kashmir"
    }
    ],
    "answer": "Kashmir",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What is the name of India's national space agency?",
    "options": [
    {
    "a": "ISRO",
    "b": "DRDO",
    "c": "NASA",
    "d":"ESA"
    }
    ],
    "answer": "ISRO",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Who won the Nobel Prize in Physiology or Medicine in 2020 for discovering the hepatitis C virus?",
    "options": [
    {
    "a": "Amartya Sen ",
    "b": "Abhijit Banerjee",
    "c": "Kailash Satyarthi ",
    "d": "Harvey J. Alter, Michael Houghton, and Charles M. Rice"
    }
    ],
    "answer": "Harvey J. Alter, Michael Houghton, and Charles M. Rice",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is the new feature introduced by Threads?",
    "options": [
    {
    "a": "Edit button",
    "b": "Voice Posts",
    "c": "Both A and B",
    "d": "None of the above"
    }
    ],
    "answer": "Both A and B",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "In which year was the Goods and Services Tax (GST) implemented in India?",
    "options": [
    {
    "a": "2016",
    "b": "2017",
    "c": "2018",
    "d": "2019",
    }
    ],
    "answer": "2017",
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