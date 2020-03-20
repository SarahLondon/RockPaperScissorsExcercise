console.log("Welcome to Rock, Paper, Scissors!");

// Obtain a choice from the user


const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function handleUserResponse (response) {
  // Validate the user's choice and tell them if they made a mistake
  //Strip capitalisation/ignore capitalisation of words

  // Make a random selection for the computer
    // A random choice of Rock, Paper, or Scissors

//Compare the two choices

//Report on who won
  console.log(response);
  readline.close();
}

readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);

if(computerChoice<=0.33){
    computerChoice="rock";
}

else if (computerChoice>0.34 && computerChoice<0.67){
    computerChoice="paper";
}

else {
  computerChoice="scissors";
}
