var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "In time series analysis, what does autocorrelation measure?",
            "options": [
                {
                    "a": "Correlation between two different variables",
                    "b": "Correlation between past and present values of the same variable",
                    "c": "Correlation between different time periods",
                    "d": "Correlation between independent variables"
                }
            ],
            "answer": "Correlation between past and present values of the same variable",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which statistical test is used to determine if there is a significant difference between the means of two or more groups?",
            "options": [
                {
                    "a": "T-test",
                    "b": "Chi-squared test",
                    "c": "ANOVA (Analysis of Variance)",
                    "d": "Pearson correlation test"
                }
            ],
            "answer": "ANOVA (Analysis of Variance)",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "What is the purpose of a scatter plot in data analysis?",
            "options": [
                {
                    "a": "To display the distribution of a single variable",
                    "b": "To show the relationship between two variables",
                    "c": "To display data in a tabular format",
                    "d": "To display hierarchical data"
                }
            ],
            "answer": "To show the relationship between two variables",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which measure of central tendency is most robust to outliers?",
            "options": [
                {
                    "a": "Mean",
                    "b": "Median",
                    "c": "Mode",
                    "d": "Range"
                }
            ],
            "answer": "Median",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "What does the acronym SQL stand for?",
            "options": [
                {
                    "a": "Standard Query Language",
                    "b": "Structured Query Language",
                    "c": "Simple Query Language",
                    "d": "Statistical Query Language"
                }
            ],
            "answer": "Structured Query Language",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which type of analysis aims to make predictions based on historical data?",
            "options": [
                {
                    "a": "Descriptive analysis",
                    "b": "Inferential analysis",
                    "c": "Exploratory analysis",
                    "d": "Predictive analysis"
                }
            ],
            "answer": "Predictive analysis",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "What is a common method for handling missing data in a dataset?",
            "options": [
                {
                    "a": "Delete all rows with missing data",
                    "b": "Replace missing values with zeros",
                    "c": "Impute missing values with statistical measures like mean or median",
                    "d": "Ignore missing data and proceed with analysis"
                }
            ],
            "answer": "Impute missing values with statistical measures like mean or median",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which type of data analysis is used to test hypotheses and make inferences about a population based on a sample?",
            "options": [
                {
                    "a": "Descriptive analysis",
                    "b": "Inferential analysis",
                    "c": "Exploratory analysis",
                    "d": "Predictive analysis"
                }
            ],
            "answer": "Inferential analysis",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "In data analysis, what is the term for a data point that falls significantly outside the expected range?",
            "options": [
                {
                    "a": "Outlier",
                    "b": "Mean",
                    "c": "Mode",
                    "d": "Standard deviation"
                }
            ],
            "answer": "Outlier",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "What is the main goal of data visualization in data analysis?",
            "options": [
                {
                    "a": "To make data look attractive",
                    "b": "To hide data details",
                    "c": "To convey information effectively",
                    "d": "To replace data analysis"
                }
            ],
            "answer": "To convey information effectively",
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