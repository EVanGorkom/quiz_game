const prompt = require("prompt-sync")();

console.log("Welcome to the Naruto the anime Quiz!\n")
console.log(play());

function play () {
  let playerScore = 0
  console.log("\n")
  const answer1 = prompt("Q1. What is the main character's name? ");
  const correctAnswer1 = "Naruto";
  if (answer1.toLowerCase() == correctAnswer1.toLowerCase()) {
    playerScore += 1
    console.log("\nCORRECT! The main character's name is 'Naruto'!\n\n");
  } else {
    console.log("\nIncorrect, the main character of the Anime 'Naruto', is called 'Naruto'.\n\n");
  }
  
  const answer2 = prompt("Q2. What is the team number that Naruto, Sasuke, and Sakura are all on under Kakashi Sensei? ");
  const correctAnswer2 = "Team 7";
  if (answer2.toLowerCase().includes('7')) {
    playerScore += 1
    console.log("\nCORRECT! The original squad name was Team 7!\n\n");
  } else {
    console.log("\nIncorrect, the team that they are assigned to is team number 7.\n\n");
  }

  const answer3 = prompt("Q3. What is the demon that is sealed within Naruto? ");
  const correctAnswer3 = "The Nine Tailed Fox";
  if (answer3.toLowerCase() == correctAnswer3.toLowerCase()) {
    playerScore += 1
    console.log("\nCORRECT! The demon within Naruto is Nine Tailed Fox!\n\n");
  } else {
    console.log("\nIncorrect, the demon within Naruto is Nine Tailed Fox\n\n");
  }
  
  const answer4 = prompt("Q4. What is the name of the Sannin that mentors Naruto? ");
  const correctAnswer4 = "Jiraiya";
  if (answer4.toLowerCase() == correctAnswer4.toLowerCase()) {
    playerScore += 1
    console.log("\nCORRECT! The Sannin that teaches Naruto is Jiraiya, the Mountain Sage!\n\n");
  } else {
    console.log("\nIncorrect, the Sannin that teaches Naruto is Jiraiya, the Mountain Sage.\n\n");
  }
  
  const answer5 = prompt("Q5. What is the name of the Fourth Hokage's Jutsu that Naruto learns from Master Jiraiya? ");
  const correctAnswer5 = "Rasengan";
  if (answer5.toLowerCase() == correctAnswer5.toLowerCase()) {
    playerScore += 1
    console.log("\nCORRECT! The Fourth Hokage's Jutsu that Naruto learns from Master Jiraiya is the Rasengan!\n\n");
  } else {
    console.log("\nIncorrect, the Fourth Hokage's Jutsu that Naruto learns from Master Jiraiya is the Rasengan.\n\n");
  }
  
  const answer6 = prompt("Q6. What is Kakashi Sensei's nickname? ");
  const correctAnswer6 = "The Copy Cat ninja";
  if (answer6.toLowerCase() == correctAnswer6.toLowerCase()) {
    playerScore += 1
    console.log("\nCORRECT! Kakashi's nickname is The Copy Cat ninja!\n\n");
  } else {
    console.log("\nIncorrect, Kakashi's nickname is The Copy Cat ninja\n\n");
  }
  
  // const answer7 = prompt("");
  // const correctAnswer7 = "";
  // if (answer7.toLowerCase() == correctAnswer7.toLowerCase()) {
  //   playerScore += 1
  //   console.log("");
  // } else {
  //   console.log("");
  // }

  finalScore(playerScore);

  playAgain();
}


function finalScore (playerScore) {
  if (playerScore >= 5) {
    console.log("\nCONGRATULATIONS!!! You passed the Naruto the anime quiz!\n\n");
  } else {
    console.log("\nYou didn't pass the quiz! :( \nGuess it's time to binge some more Naruto!\n\n");
  }
} 

function playAgain () {
  const replay = prompt("Do you want to play again? (y/n) ");
  if (replay == 'y') {
    play();
  }
  else if (replay == 'n') {
    return;
  }
  else {
    playAgain();
  }
}