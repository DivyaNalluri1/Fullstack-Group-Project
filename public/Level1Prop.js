var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What is 25% of 80?",
            "options": [
                {
                    "a": "10",
                    "b": "15",
                    "c": "20",
                    "d": "25"
                }
            ],
            "answer": "20",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "If 40% of a number is 120, what is the number?",
            "options": [
                {
                    "a": "200",
                    "b": "250",
                    "c": "300",
                    "d": "320"
                }
            ],
            "answer": "300",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "If the original price of an item was $80, and it is currently on sale for 20% off, what is the sale price?",
            "options": [
                {
                    "a": "$16",
                    "b": "$64",
                    "c": "$72",
                    "d": "$90"
                }
            ],
            "answer": "$64",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "What is 30% expressed as a decimal?",
            "options": [
                {
                    "a": "0.3",
                    "b": "0.03",
                    "c": "0.003",
                    "d": "3"
                }
            ],
            "answer": "0.3",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "If 15% of a quantity is 45, what is 20% of the same quantity?",
            "options": [
                {
                    "a": "40",
                    "b": "60",
                    "c": "75",
                    "d": "90"
                }
            ],
            "answer": "60",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "If you have a pizza divided into 8 equal slices, and you eat 3 slices, what percentage of the pizza have you eaten?",
            "options": [
                {
                    "a": "25%",
                    "b": "30%",
                    "c": "37.5%",
                    "d": "40%"
                }
            ],
            "answer": "37.5%",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "If 60% of a class is made up of girls, and there are 30 students in the class, how many are boys?",
            "options": [
                {
                    "a": "6",
                    "b": "12",
                    "c": "18",
                    "d": "24"
                }
            ],
            "answer": "12",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "A shop sells a jacket for $80, making a 25% profit. What was the cost price of the jacket?",
            "options": [
                {
                    "a": "$60",
                    "b": "$65",
                    "c": "$70",
                    "d": "$75"
                }
            ],
            "answer": "$60",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "If a car depreciates by 15% each year, what will be its value after 3 years if it is currently worth $20,000?",
            "options": [
                {
                    "a": "$11,025",
                    "b": "$12,750",
                    "c": "$14,000",
                    "d": "$17,000"
                }
            ],
            "answer": "$12,750",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "If you increase a number by 20%, and then decrease the result by 10%, what is the overall change in percentage?",
            "options": [
                {
                    "a": "8%",
                    "b": "10%",
                    "c": "12%",
                    "d": "14%"
                }
            ],
            "answer": "12%",
            "score": 0,
            "status": ""
        },
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