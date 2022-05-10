// this creates a function named "fight" //
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//Note the lack of quotation marks around playerName
console.log(playerName,playerAttack, playerHealth);
var enemyName = "Roborto";
var enemyHealth =50;
var enemyAttack = 12 ;

var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.")
    //subtract the value of 'playerAttack' from the value of 'enemyHealth" and use that result to update the value in the 'enemyHealth" variable
    // Log a resulting message to the console so we know that it worked.

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

    // Log a resulting message to the console so we know that it worked.

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
//if player choses to fight,then fight
if (promptFight ==="fight" ||promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack var 
enemyHealth = enemyHealth - playerAttack;
console.log(
playerName + "attacked" + enemyName + "." + "now has" + enemyHealth + "health remaining." );
//Check  enemy;s health
if (enemyHealth <= 0) {
    window.alert(enemyName + "has died");
} else {
    window.alert(enemyName + "still has" + enemyHealth + "health left.");
}
// remove player's health by sub the amount set in enemyAttack var
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
);
//check player's health 
if (playerHealth <= 0 ){
    window.alert(playerName + "has died");
} else {
    window.alert(playerName + "still has" + playerHealth + "health left.");
}
// if player choses to skip
} else if (promptFight === "skip" || promptFight ==="SKIP") {
    //confirm player wants to skip
    var confirmSkip =window.confirm("Are you sure you'd like to quit?");
    //if yes(treu), leave fight
    if (confirmSkip) {
        window.alert(playerName + "has decided to skip this fight. Goodbye!");
        //sub money from playerMoney for skipping
        playerMoney= playerMoney -2;
    }
    //if no false ask question agagin by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}
};


fight();
