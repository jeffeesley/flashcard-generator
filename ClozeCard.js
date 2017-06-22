
//Pretty self explanatory.  .replace swaps out the answer for dashes

function ClozeCard(text, cloze){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "-----");
}

module.exports = ClozeCard;

//Considered adding a method that made it so the number of dashes that came up matched
//the number of characters, with a quick little if(clozeArray[i] == " ") it would add
//a space instead of a dash so you could see how many words the answer is.
//I worked with Mike and Jess on making these functions and they're easy.  You just
//Make a loop that iterates for however long the answer is and replace letters with
//dashes and spaces with spaces.  But because all of my answers don't make any sense,
//I figured it wouldn't be much help to the user considering I put that Ferris Bueller 
//was played by 'several small children in a large coat' so that'd look pretty dumb
//as '------- ----- -------- -- - ----- ----'.