/*
CIT281 Project 4
Anna Anton
*/

const fastify = require("fastify")();
const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
} = require('./p4-module.js');

fastify.get("/cit/question", function (request, reply) {
    // home route
    reply
      .code(200) // status code
      .header("Content-Type", "text/json; charset=utf-8") // mime type for arrays and jsons
      .send({
        "error": "",
        "statusCode": 200,
        "questions": [
            "Q1",
            "Q2",
            "Q3"
        ]
    }); 
  });

  fastify.get("/cit/answer", function (request, reply) {
    // home route
    reply
      .code(200) // status code
      .header("Content-Type", "text/json; charset=utf-8") // mime type for arrays and jsons
      .send({
        "error": "",
        "statusCode": 200,
        "answers": [
            "A1",
            "A2",
            "A3"
        ]
    }); 
  });

  fastify.get("/cit/questionanswer", function (request, reply) {
    // home route
    reply
      .code(200) // status code
      .header("Content-Type", "text/json; charset=utf-8") // mime type for arrays and jsons
      .send({
        "error": "",
        "statusCode": 200,
        "questions_answers": [
          {
            "question": "Q1",
            "answer": "A1"   
          },
          {
            "question": "Q2",
            "answer": "A2"
          },
          {
            "question": "Q3",
            "answer": "A3"
          }
        ]
    });
  });

  fastify.get("/cit/question/:number", function (request, reply) {
    // home route
    reply
      .code(200) // status code
      .header("Content-Type", "text/json; charset=utf-8") // mime type for arrays and jsons
      .send({
        "error": "",
        "statusCode": 200,
        "question": "Q1",
        "number": 1
    });
  });

  fastify.get("/cit/answer/:number", function (request, reply) {
    // home route
    reply
      .code(200) // status code
      .header("Content-Type", "text/json; charset=utf-8") // mime type for arrays and jsons
      .send({
        "error": "",
        "statusCode": 200,
        "answer": "A2",
        "number": 2
    });
  });

  fastify.get("/cit/questionanswer/:number", function (request, reply) {
    // home route
    reply
      .code(200) // status code
      .header("Content-Type", "text/json; charset=utf-8") // mime type for arrays and jsons
      .send({
        "error": "",
        "statusCode": 200,
        "question": "Q3",
        "answer": "A3",
        "number": 3
    });
  });

  fastify.get("*", function (request, reply) {
    // home route
    reply
      .code(200) // status code
      .header("Content-Type", "text/json; charset=utf-8") // mime type for arrays and jsons
      .send({
        "error": "Route not found",
        "satusCode": 404
    });
  });

  

  // Start server and listen to requests using Fastify
  const listenIP = "localhost";
  const listenPort = 8080;
  fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });