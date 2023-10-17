var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the main idea of the passage?",
    "options": [
    {
    "a": "A brief history of the Internet",
    "b": "How to make a cup of coffee",
    "c": "The importance of exercise",
    "d": "The life of Abraham Lincoln",
    }
    ],
    "answer": "A brief history of the Internet",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "In the text, which detail supports the author's argument?",
    "options": [
    {
    "a": "The sun is a star",
    "b": "Dogs are great pets",
    "c": "A recent study showed a link between smoking and cancer",
    "d": "Bananas are a good source of potassium",
    }
    ],
    "answer": "A recent study showed a link between smoking and cancer",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What was the main topic discussed in the podcast?",
    "options": [
    {
    "a": "Travel tips for beginners",
    "b": "The history of jazz music",
    "c": "The process of photosynthesis",
    "d" : "How to bake a cake",
    }
    ],
    "answer": "Travel tips for beginners",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "In the conversation, what does Jane say about her vacation plans?",
    "options": [
    {
    "a": "She's going to the beach",
    "b": "She's staying home",
    "c": "She's traveling to Europe",
    "d" :"She's visiting her family",
    }
    ],
    "answer": "She's traveling to Europe",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "In the bar chart, what does the y-axis represent?",
    "options": [
    {
    "a": "Time",
    "b": "Temperature",
    "c": "Sales",
    "d": "Population",
    }
    ],
    "answer": "Sales",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "What does the arrow in the diagram indicate?",
    "options": [
    {
    "a": "Movement to the left",
    "b": "A point of interest",
    "c": "An increase in temperature",
    "d" : "The direction of flow",
    }
    ],
    "answer": "The direction of flow",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which of the following is an example of a logical fallacy?",
    "options": [
    {
    "a": " Presenting scientific evidence to support a claim",
    "b": "Attacking the person making the argument rather than addressing the argument itself",
    "c": "Using data and statistics to strengthen an argument",
    "d": "Drawing a well-supported conclusion based on evidence",
    }
    ],
    "answer": "Attacking the person making the argument rather than addressing the argument itself",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What's the primary purpose of an argumentative essay?",
    "options": [
    {
    "a": "To provide a summary of a topic",
    "b": "To entertain the reader",
    "c": "To present and support a point of view",
    "d": "To describe a historical event",
    }
    ],
    "answer": "To present and support a point of view",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "In a Japanese business meeting, what is the customary way to exchange business cards?",
    "options": [
    {
    "a": "Hand them with one hand while making eye contact",
    "b": "Place them on the table without acknowledging them",
    "c": "Offer them with both hands and bow deeply",
    "d": "Avoid exchanging business cards in a formal meeting",
    }
    ],
    "answer": "Offer them with both hands and bow deeply",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "In some cultures, the color white is associated with mourning. What does it symbolize in Western cultures?",
    "options": [
    {
    "a": "Purity and innocence",
    "b": "Joy and celebration",
    "c": "Sadness and mourning",
    "d": "Wealth and prosperity",
    }
    ],
    "answer": "Purity and innocence",
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
