// this creates a function named "fight" //
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//Note the lack of quotation marks around playerName
console.log(playerName,playerAttack, playerHealth,playerMoney );
var enemyNames = ['Roborto' , 'Amy Android' , 'Robo Trumble'];
var enemyHealth = 20;
var enemyAttack = 12 ;
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// for(var i = 0; i< enemyNames.length; i++){
//     // console.log(enemyNames[i]);
//     // console.log(i);
//     // console.log(enemyNames[i] + " is at " + i + " index ");
// }

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0){
        //place fifght function 
    
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.")
    // if player choses to skip confirm and then stop the loop
        if (promptFight === "skip" || promptFight ==="SKIP") {
    //confirm player wants to skip
            var confirmSkip =window.confirm("Are you sure you'd like to quit?");
    //if yes(treu), leave fight
        if (confirmSkip) {
            window.alert(playerName + "has decided to skip this fight. Goodbye!");
        //sub money from playerMoney for skipping
            playerMoney= Math.max(0, playerMoney - 10);
            console.log("playerMoney" ,playerMoney);
            break;
    }
}
    // if (promptFight ==="fight" ||promptFight === "FIGHT") {
    // //remove enemy's health by subtracting the amount set in the playerAttack var 
    var damgage = randomNumber(playerAttack -3, playerAttack);
enemyHealth = Math.max(0,enemyHealth - damgage);
console.log(
    playerName + 'attacked' + enemyName + '.' + 'now has' + enemyHealth + 'health remaining.');
//Check  enemy;s health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died");
        // award player money for winning
        playerMoney = playerMoney +20;
        break;
} else {
    window.alert(enemyName + 'still has' + enemyHealth + 'health left.');
}
// remove player's health by sub the amount set in enemyAttack var
var damgage = randomNumber(enemyAttack - 3, enemyAttack);
playerHealth = Math.max(0, playerHealth - damgage);
console.log(
    enemyName + 'attacked' + playerName + '.' + playerName + 'now has' + playerHealth + 'health remaining.'
);
//check player's health 
if (playerHealth <= 0 ){
    window.alert(playerName + 'has died');
    break;
} else {
    window.alert(playerName + 'still has' + playerHealth + 'health left.');
}
    }
};
// function to start a new game 
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i=0; i< enemyNames.length; i++ ){
    if (playerHealth > 0) {
        // let player know what round they are in 
        window.alert('Welcome to Robot Gladiators ! Round ' + ( i + 1 ) );
    var pickedEnemyName = enemyNames[i];
    // reset enemyHealth b4 starting new fight
    enemyHealth = randomNumber(40, 60);
    // use debugger to pause script 
    // debugger;
    fight(pickedEnemyName);
    // if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1 ){
        // ask if player wants to use the store before next round 
        var storeConfirm= window.confirm ("The fight is over,visit the store before the next round?");
        //if yes ,take them to the store() function
        if (storeConfirm) {
        shop();
        }
    }
    }
    else {
        window.alert("You have lost your robot in battle! GAME OVER!");
        break;
    }
}
endGame();
};
var endGame = function(){
    // if player is still alive,player wins!
    if (playerHealth > 0 ) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '.');
    }
    else {
    window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
var shop = function(){
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt (
        "Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
        );
        // use switch to carry out action
        switch(shopOptionPrompt){
            case "REFILL": //new case
            case "refill":
                if (playerMoney >= 7 ){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth=playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
            window.alert (" You don't have enough money!");
            }
                break;
            case "upgrade":
            case "UPGRADE": //new 
                if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                }
                else{
                    window.alert("You don't have enough money!");
                } 
                break;
            case "leave":
            case "LEAVE": //new
                window.alert("Leaving the store.");
                // do nothing ,so function will end
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
                // call shop() again to force player to pick a valid option
                shop();
                break;
        }
};
// function to generate a random numeric value
var randomNumber = function( min , max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};
startGame();
