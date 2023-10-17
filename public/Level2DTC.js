var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What does the x-axis typically represent in a chart?",
            "options": [
                {
                    "a": "Independent variable",
                    "b": "Dependent variable",
                    "c": "Category labels",
                    "d": "Data points"
                }
            ],
            "answer": "Independent variable",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which chart is used to display the distribution of a dataset's values?",
            "options": [
                {
                    "a": "Scatter plot",
                    "b": "Line chart",
                    "c": "Histogram",
                    "d": "Pie chart"
                }
            ],
            "answer": "Histogram",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "In a line chart, what does the line represent?",
            "options": [
                {
                    "a": "Data points",
                    "b": "Category labels",
                    "c": "Time intervals",
                    "d": "Independent variable"
                }
            ],
            "answer": "Data points",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "What does a radar chart primarily display?",
            "options": [
                {
                    "a": "Time series data",
                    "b": "Frequency distribution",
                    "c": "Multivariate data across different categories",
                    "d": "Hierarchical data"
                }
            ],
            "answer": "Multivariate data across different categories",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which type of chart is best suited for showing the relationship between two variables as they change over time?",
            "options": [
                {
                    "a": "Scatter plot",
                    "b": "Box plot",
                    "c": "Bar chart",
                    "d": "Radar chart"
                }
            ],
            "answer": "Scatter plot",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "In a data table, what do columns typically represent?",
            "options": [
                {
                    "a": "Data points",
                    "b": "Time intervals",
                    "c": "Observations or records",
                    "d": "Variables or attributes"
                }
            ],
            "answer": "Variables or attributes",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "Which type of chart is commonly used for displaying a hierarchy or organizational structure?",
            "options": [
                {
                    "a": "Bubble chart",
                    "b": "Tree diagram",
                    "c": "Scatter plot",
                    "d": "Pie chart"
                }
            ],
            "answer": "Tree diagram",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What type of chart is ideal for showing the spread and distribution of data, particularly in a skewed dataset?",
            "options": [
                {
                    "a": "Line chart",
                    "b": "Scatter plot",
                    "c": "Box plot",
                    "d": "Pie chart"
                }
            ],
            "answer": "Box plot",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "In a pie chart, what do the individual slices represent?",
            "options": [
                {
                    "a": "Time intervals",
                    "b": "Frequency distribution",
                    "c": "Independent variables",
                    "d": "Proportions of a whole"
                }
            ],
            "answer": "Proportions of a whole",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "What is the primary advantage of using data tables and charts in data analysis?",
            "options": [
                {
                    "a": "They simplify data collection.",
                    "b": "They obscure data patterns.",
                    "c": "They help in data visualization and understanding.",
                    "d": "They replace the need for statistical analysis."
                }
            ],
            "answer": "They help in data visualization and understanding.",
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