/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the focus of the national deep-tech policy introduced by the Indian government?",
    "options": [
    {
    "a": "Supporting deep tech ventures",
    "b": "Fine-tuning existing startup policies",
    "c": "Both A and B",
    "d": "None of the above"
    }
    ],
    "answer": "Both A and B",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "When will OnePlus Open launch in India?",
    "options": [
    {
    "a": "October 18, 2023",
    "b": "October 19, 2023",
    "c": "October 20, 2023",
    "d":"October 21, 2023"
    }
    ],
    "answer": "October 19, 2023",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is the price of Oppo Find N3 Flip in India?",
    "options": [
    {
    "a": "Rs 84,999",
    "b": "Rs 89,999",
    "c": "Rs 94,999",
    "d" : "Rs 99,999"
    }
    ],
    "answer": "Rs 94,999",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which version of Windows no longer offers a free upgrade to Windows 11?",
    "options": [
    {
    "a": "Windows XP",
    "b": "Windows Vista",
    "c": "Windows 7 and Windows 8",
    "d" : "Windows 10"
    }
    ],
    "answer": "Windows 7 and Windows 8",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which country deployed the first 5G network?",
    "options": [
    {
    "a": "japan",
    "b": "China",
    "c": "South Korea",
    "d": "USA",
    }
    ],
    "answer": "South Korea",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "What new feature does WhatsApp now offer to its users?",
    "options": [
    {
    "a": "Create and share AI stickers",
    "b": "Create and share GIFs",
    "c": "Create and share Memes",
    "d" : "Create and share Videos"
    }
    ],
    "answer": "Create and share AI stickers",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which company’s AI assistant powered by Bard might first be available on Pixel 8 and Samsung Galaxy S24?",
    "options": [
    {
    "a": "Microsoft",
    "b": "Apple",
    "c": "Google",
    "d":"Amazon"
    }
    ],
    "answer": "Google",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What is the starting price of Pixel 8 in India?",
    "options": [
    {
    "a": "Rs 65,999",
    "b": "Rs 70,999",
    "c": "Rs 75,999",
    "d": "Rs 80,999"
    }
    ],
    "answer": "Rs 75,999",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is OnePlus giving away for free today?",
    "options": [
    {
    "a": "Chargers",
    "b": "Other accessories",
    "c": "Smartphones",
    "d": "All of the above"
    }
    ],
    "answer": "All of the above",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which company’s phone design was leaked online recently?",
    "options": [
    {
    "a": "OnePlus",
    "b": "Samsung",
    "c": "Apple",
    "d": "Google",
    }
    ],
    "answer": "OnePlus",
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