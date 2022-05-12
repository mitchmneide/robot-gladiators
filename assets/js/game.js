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
            playerMoney= playerMoney -10;
            console.log("playerMoney" ,playerMoney);
            break;
    }
}
    // if (promptFight ==="fight" ||promptFight === "FIGHT") {
    // //remove enemy's health by subtracting the amount set in the playerAttack var 
enemyHealth = enemyHealth - playerAttack;
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
playerHealth = playerHealth - enemyAttack;
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

for(var i=0; i< enemyNames.length; i++ ){
    if (playerHealth > 0) {
        // let player know what round they are in 
        window.alert('Welcome to Robot Gladiators ! Round' + ( i + 1 ) );
    var pickedEnemyName = enemyNames[i];
    // reset enemyHealth b4 starting new fight
    enemyHealth=50;
    // use debugger to pause script 
    // debugger;
    fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! GAME OVER!");
        break;
    }
}
