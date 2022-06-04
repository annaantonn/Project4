/*
CIT281 Project 4
Anna Anton
*/

const { data } = require('./p4-data.js');

function getQuestions() {
    let arr = [];
    for (let item of data) {
        arr.push(item.question);
    }
    return arr;
}

function getAnswers() {
    let arr = [];
    for (let item of data) {
        arr.push(item.answer);
    }
    return arr;
}

function getQuestionsAnswers() {
    let arr = [];
    for (let item of data) {
        arr.push(item);
    }
    return arr;
}

function getQuestion(number ="") {
    const obj = {
        question: data.question,
        answer: data.answer
    };
    return obj;
}

function getQuestion(number ="") {
    const response = {
        error: "",
        question: "",
        number: "",
    };

    if (!Number.isInteger(number)) {
        response.error = "Question number must be an integer";
    }
    else if (number < 1) {
        response.error = "Question number must be >= 1";
    }
    else if (number > 3) {
        response.error = "Question number must be less than the number of questions (3)";
    }
    else {
        response.question = data[(number-1)].question;
        response.number = number;
    }
    return response;
}

function getAnswer(number = "") {
    const response = {
        error: "",
        answer: "",
        number: "",
    };

    if (!Number.isInteger(number)) {
        response.error = "Answer number must be an integer";
    }
    else if (number < 1) {
        response.error = "Answer number must be >= 1";
    }
    else if (number > 3) {
        response.error = "Answer number must be less than the number of questions (3)";
    }
    else {
        response.answer = data[(number-1)].answer;
        response.number = number;
    }
    return response;
}

function getQuestionAnswer(number="") {
    const response = {
        question: "",
        answer: "",
        number: "",
        error: "",
    };

    if (!Number.isInteger(number)) {
        response.error = "Question number must be an integer";
    }
    else if (number < 1) {
        response.error = "Question number must be >= 1";
    }
    else if (number > 3) {
        response.error = "Question number must be less than the number of questions (3)";
    }
    else {
        response.question = data[(number-1)].question;
        response.answer = data[(number-1)].answer;
        response.number = number;
    }
    return response;
}

module.export = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
};   

//console.log(getQuestion(4));

//console.log(getQuestionAnswer(1));
 //data[number];

// iterate over the object using 
//for (let item of data) {
  //  obj.push(data.question);
//}
//console.log(getQuestions());
//console.log(getAnswers());
//console.log(getQuestionsAnswers());
//console.log(getQuestion());
