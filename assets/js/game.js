var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["ROBOBOBOBO", "Big Dong Pete", "The Sizzler"];
var enemyHealth = 50
var enemyAttack = 12;


var fight = function(enemyName) {
    // Alert players that they are starting a round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight"){
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP"|| promptFight === "Skip") {

        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?")
        if (confirmSkip) {

            //inform the player that they've skipped the fight and subtract from their money
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney -= 2;
        } else {

            //restart fight function
            fight();
        }
        
      } else {
        window.alert("You need to choose a valid option. Try again!");
      }
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }