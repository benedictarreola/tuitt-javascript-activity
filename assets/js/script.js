var choices = [
	"rock",
	"paper",
	"scissors"
];

var playerScore = 0;
var enemyScore = 0;

function playerRemoveIcons(){
	$("#player").removeClass(
		"fa-hand-rock fa-hand-scissors fa-hand-paper fa-meh indianred teal royalblue"
		);
	$('#playerChoice').removeClass("tada");
}

function enemyRemoveIcons(){
	$("#enemy").removeClass(
		"fa-hand-rock fa-hand-scissors fa-hand-paper fa-grimace indianred teal royalblue"
		);
	$('#enemyChoice').removeClass("tada");
}

$("#btnRock").click(function(){
	
	playerRemoveIcons();
	enemyRemoveIcons();

	$('#player').addClass("fa-hand-rock indianred");
	var playerChoice = "rock";
	getResult(playerChoice);
	updateScore();

});

$("#btnPaper").click(function(){
	
	playerRemoveIcons();
	enemyRemoveIcons();

	$('#player').addClass("fa-hand-paper teal");
	var playerChoice = "paper";
	getResult(playerChoice);
	updateScore();

});

$("#btnScissors").click(function(){
	
	playerRemoveIcons();
	enemyRemoveIcons();

	$('#player').addClass("fa-hand-scissors royalblue");
	var playerChoice = "scissors";
	getResult(playerChoice);
	updateScore();

});

function getResult(playerChoice) {

	var randomNum = Math.floor((Math.random() * 3));
	var enemyChoice = choices[randomNum];
	
	switch(enemyChoice) {

		case "rock":
			$('#enemy').addClass("fa-hand-rock indianred");
			break;

		case "paper":
			$('#enemy').addClass("fa-hand-paper teal");
			break;

		case "scissors":
			$('#enemy').addClass("fa-hand-scissors royalblue");
			break;

		default:
			//none
	}

	if(playerChoice == "rock" && enemyChoice == "rock") {
		gameDraw();
	}
	else if (playerChoice == "paper" && enemyChoice == "rock") {
		gameWin();
	}
	else if (playerChoice == "scissors" && enemyChoice == "rock") {
		gameLose();
	}

	else if(playerChoice == "rock" && enemyChoice == "paper") {
		gameLose();
	}
	else if (playerChoice == "paper" && enemyChoice == "paper") {
		gameDraw();
	}
	else if (playerChoice == "scissors" && enemyChoice == "paper") {
		gameWin();
	}

	else if(playerChoice == "rock" && enemyChoice == "scissors") {
		gameWin();
	}
	else if (playerChoice == "paper" && enemyChoice == "scissors") {
		gameLose();
	}
	else if (playerChoice == "scissors" && enemyChoice == "scissors") {
		gameDraw();
	}
}

function gameWin() {
	$('#gameResult').html("WIN");
	$('#playerChoice').addClass("tada");
	playerScore += 1;
}

function gameLose() {
	$('#gameResult').html("LOSE");
	$('#enemyChoice').addClass("tada");
	enemyScore += 1;
}

function gameDraw() {
	$('#gameResult').html("DRAW");
}

function updateScore() {
	$('#playerScore').html(playerScore);
	$('#enemyScore').html(enemyScore);
}