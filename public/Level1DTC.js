var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What is the primary purpose of using data tables and charts?",
            "options": [
                {
                    "a": "Data collection",
                    "b": "Data storage",
                    "c": "Data visualization",
                    "d": "Data cleansing"
                }
            ],
            "answer": "Data visualization",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which type of chart is best for showing the composition of a whole, such as market share?",
            "options": [
                {
                    "a": "Line chart",
                    "b": "Bar chart",
                    "c": "Pie chart",
                    "d": "Scatter plot"
                }
            ],
            "answer": "Pie chart",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "In a bar chart, what does the height of each bar typically represent?",
            "options": [
                {
                    "a": "Time",
                    "b": "Frequency",
                    "c": "Area",
                    "d": "Temperature"
                }
            ],
            "answer": "Frequency",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which type of chart is useful for displaying trends over time, especially with a large number of data points?",
            "options": [
                {
                    "a": "Scatter plot",
                    "b": "Bar chart",
                    "c": "Line chart",
                    "d": "Radar chart"
                }
            ],
            "answer": "Line chart",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What type of chart is used to represent the relationship between two variables with dots on a grid?",
            "options": [
                {
                    "a": "Histogram",
                    "b": "Line chart",
                    "c": "Scatter plot",
                    "d": "Bar chart"
                }
            ],
            "answer": "Scatter plot",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which of the following is NOT a commonly used type of data chart?",
            "options": [
                {
                    "a": "Radar chart",
                    "b": "Box plot",
                    "c": "Bubble chart",
                    "d": "Linear regression chart"
                }
            ],
            "answer": "Linear regression chart",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "In a data table, what do rows typically represent?",
            "options": [
                {
                    "a": "Categories or labels",
                    "b": "Time intervals",
                    "c": "Data points",
                    "d": "Observations or records"
                }
            ],
            "answer": "Observations or records",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which type of chart is best for comparing data across multiple categories or groups?",
            "options": [
                {
                    "a": "Scatter plot",
                    "b": "Box plot",
                    "c": "Bar chart",
                    "d": "Radar chart"
                }
            ],
            "answer": "Bar chart",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is a common use of a box plot (box-and-whisker plot)?",
            "options": [
                {
                    "a": "Showing the distribution of data and identifying outliers",
                    "b": "Displaying time series data",
                    "c": "Representing proportions in a whole",
                    "d": "Comparing two variables on a grid"
                }
            ],
            "answer": "Showing the distribution of data and identifying outliers",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which type of chart is most appropriate for showing the relationship between three variables?",
            "options": [
                {
                    "a": "Bar chart",
                    "b": "Scatter plot",
                    "c": "Bubble chart",
                    "d": "Line chart"
                }
            ],
            "answer": "Bubble chart",
            "score": 0,
            "status": ""
        }
    ]
}

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