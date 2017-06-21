// var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var questions = require("./questions.js").questions;
//array to populate with questions
var clozeQuestions = [];
//which question the user is on, incremented each time they answer a question
var index = 0;
//populating question array
for(var i = 0; i < questions.length; i++){
	var clozed = new ClozeCard(questions[i].full, questions[i].cloze);
	clozeQuestions.push(clozed);
}

function questionPrompt(){
	inquirer.prompt([
	{
		name: "userInput",
		message: clozeQuestions[index].partial + "\nAnswer: ",
		type: "input"
	}

	]).then(function(answers){
		if(answers.userInput.toLowerCase() == clozeQuestions[index].cloze.toLowerCase()){
			console.log("Correct");
		}
		else{
			console.log("Wrong, you jimbus");
		}
		console.log(clozeQuestions[index].fullText);
		if(index < clozeQuestions.length - 1){
			index++;
			questionPrompt();
		}
		else{
			console.log("Game Over! You don't win or lose this game. It's impossible. Suck it");
		}

	});
}
questionPrompt();
