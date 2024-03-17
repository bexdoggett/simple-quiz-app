const quizData = {
    questions: [
      {
        question: "Who scored the winning goal in the champions league final '22-'23?",
        choices: {
           "a" : "Rodri",
           "b" : "Haaland",
           "c" : "De Bruyne",
           "d" : "Gundogan",
        },
        correctAnswer: "a",
      },
      {
        question: "How many ballon d'or has Messi won?",
        choices: {
          "a" : "5",
          "b" : "7",
          "c" : "8",
          "d" : "9",
        },
        correctAnswer: "c",
      },
      {
        question: "What country is Julian Alvarez from?",
        choices: {
          "a" : "Spain", 
          "b" : "Argentina", 
          "c" : "Brazil", 
          "d" : "Mexico"
        },
        correctAnswer: "b",
      },
      {
        question: "Which club has won the most champions leagues?",
        choices: {
          "a" : "Barcelona", 
          "b" : "Liverpool", 
          "c" : "Real Madrid", 
          "d" : "Bayern Munich"
        },
        correctAnswer: "c",
      },
      {
        question: "How many champions leagues has Liverpool won?",
        choices: {
          "a" : "7",
          "b" : "4",
          "c" : "5",
          "d" : "6",
        },
        correctAnswer: "d",
      },
      {
        question: "What country is Edson Alvarez from?",
        choices: {
          "a" : "Mexico",
          "b" : "Argentina",
          "c" : "Panama",
          "d" : "Marocco",
        },
        correctAnswer: "a"
      }
    ],
};

Object.freeze(quizData);

const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
};

export {
    quizData,
    resultInitalState
}