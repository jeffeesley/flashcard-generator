// Requiring everything I need
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

//inquirer prompt to show the question that takes in an input
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
			//If they get the answer right
		}
		else{
			console.log("Wrong, you jimbus");
			//If they get it wrong
		}
		console.log(clozeQuestions[index].fullText);
		if(index < clozeQuestions.length - 1){
			index++;
			questionPrompt();
			//Increments what question the user is on
			//calls the inquirer prompt again
			//I could've done this above and nested the other if statements in here
			//That way when we reach the last question it will skip the two conditionals above
			//because this one would be satisfied and it'd save two comparisons.  Yay Big O!
			//But I didn't feel like it so I didn't.
		}
		else{
			console.log("Game Over! You don't win or lose this game. It's impossible. Suck it");
			//You don't win at flashcards.  No one wins at flashcards
		};

	});
};
//This guy runs it initially, once
questionPrompt();
