var quiz = {
    "JS": [
      {
        "id": 1,
        "question": "What is the next number in the sequence 2, 6, 12, 20, 30, ...?",
        "options": [
          { "a": "42", "b": "45", "c": "44", "d": "48" }
        ],
        "answer": "a) 42",
        "score": 0,
        "status": ""
      },
      {
        "id": 2,
        "question": "Which pattern follows the sequence? 1, 2, 4, 8, 16, ...",
        "options": [
          { "a": "Addition by 1", "b": "Addition by 2", "c": "Multiplication by 2", "d": "Multiplication by 3" }
        ],
        "answer": "c) Multiplication by 2",
        "score": 0,
        "status": ""
      },
      {
        "id": 3,
        "question": "What is the missing number in this sequence? 4, 10, 16, 22, ...?",
        "options": [
          { "a": "24", "b": "25", "c": "30", "d": "26" }
        ],
        "answer": "d) 26",
        "score": 0,
        "status": ""
      },
      {
        "id": 4,
        "question": "Which of the following figures does not belong in the group?",
        "options": [
          { "a": "Figure A", "b": "Figure B", "c": "Figure C", "d": "Figure D" }
        ],
        "answer": "c) Figure C",
        "score": 0,
        "status": ""
      },
      {
        "id": 5,
        "question": "Find the odd one out: Square, Circle, Triangle, Hexagon, Octagon",
        "options": [
          { "a": "Circle", "b": "Hexagon", "c": "Triangle", "d": "Square" }
        ],
        "answer": "a) Circle",
        "score": 0,
        "status": ""
      },
      {
        "id": 6,
        "question": "What comes next in the series? AB, CD, EF, GH, ...",
        "options": [
          { "a": "IJ", "b": "KL", "c": "MN", "d": "OP" }
        ],
        "answer": "b) KL",
        "score": 0,
        "status": ""
      },
      {
        "id": 7,
        "question": "Which pattern is not like the others? 5, 10, 15, 25, 30, 35",
        "options": [
          { "a": "Adding 5", "b": "Adding 10", "c": "Adding 20", "d": "Adding 15" }
        ],
        "answer": "c) Adding 20",
        "score": 0,
        "status": ""
      },
      {
        "id": 8,
        "question": "What is the next letter in the sequence? A, C, E, G, ...",
        "options": [
          { "a": "H", "b": "I", "c": "J", "d": "F" }
        ],
        "answer": "c) J",
        "score": 0,
        "status": ""
      },
      {
        "id": 9,
        "question": "Which of the following figures is the mirror image of the given figure?",
        "options": [
          { "a": "Figure A", "b": "Figure B", "c": "Figure C", "d": "Figure D" }
        ],
        "answer": "a) Figure A",
        "score": 0,
        "status": ""
      },
      {
        "id": 10,
        "question": "What is the missing number in the pattern? 4, 16, 36, 64, ...?",
        "options": [
          { "a": "100", "b": "144", "c": "81", "d": "121" }
        ],
        "answer": "b) 144",
        "score": 0,
        "status": ""
      }
    ]
  };
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

