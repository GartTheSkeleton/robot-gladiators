var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["ROBOBOBOBO", "Big Dong Pete", "The Sizzler"];
var enemyHealth = 50
var enemyAttack = 12;


var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };

// function to start a new game
var startGame = function() {
     // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = 50;
  
        fight(pickedEnemyName);

        // if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            var storeConfirm = window.confirm("The fight is over, wanna buy some shit?");

            if (storeConfirm){
              shop();  
            }
        }
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    endGame();
  };

  // function to end the entire game
var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job! You won video games. Your score is " + playerMoney + ".");
    } else {
        window.alert("You died, idiot.");
    }
    var playagainConfirm = window.confirm("Wanna play again?")
    if (playagainConfirm) {
        startGame();
    }
    else {
        window.alert("Goodbye.")
    }
  };

  var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")

    switch (shopOptionPrompt){
        case "REFILL":
        case "Refill":
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dongers.");
            playerHealth += 20;
            playerMoney -= 7;
            }else{
                window.alert("You dont have enough money, moron.");
            }
            break;
        
        case "UPGRADE":
        case "Upgrade":
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollariedoos.");
            playerAttack += 6;
            playerMoney -= 7;
            }else{

            }
            break;

        case "LEAVE":
        case "Leave":
        case "leave":
            window.alert("Leaving the store. Save that money.");
            break;
        default:
            window.alert("Pick a valid option please.");
            shop();
            break;
    }
  };

// start the game when the page loads
startGame();