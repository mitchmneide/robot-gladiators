// function to generate a random numeric value
var randomNumber = function( min , max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};
var fightOrSkip = function (){ 
        
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.")
// if player choses to skip confirm and then stop the loop
if(promptFight === "" || promptFight === null ){
    window.alert("You need to provide a valid answer! Pleae try again");
    return fightOrSkip();
}    
promptFight= promptFight.toLowerCase();
if (promptFight === "skip") {
//confirm player wants to skip
        var confirmSkip =window.confirm("Are you sure you'd like to quit?");
//if yes(treu), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
    //sub money from playerInfo.money for skipping
        playerInfo.money= Math.max(0, playerInfo.money - 10);
        // return true if player wants to leave
        return true; 
}
}
return false;
};
var fight = function(enemy) {
    while(playerInfo.health > 0 && enemy.health > 0){
        //place fifght function 
    if (fightOrSkip()) {
        break;
    } 
    //replace code with this function
    var damgage = randomNumber(playerInfo.attack -3, playerInfo.attack);
enemy.health = Math.max(0,enemy.health - damgage);
console.log(
    playerInfo.name + 'attacked' + enemy.name + '.' + 'now has' + enemy.health + 'health remaining.');
//Check  enemy;s health
    if (enemy.health <= 0) {
        window.alert(enemy.name + "has died");
        // award player money for winning
        playerInfo.money = playerInfo.money +20;
        break;
} else {
    window.alert(enemy.name + 'still has' + enemy.health + 'health left.');
}
// remove player's health by sub the amount set in enemy.attack var
var damgage = randomNumber(enemy.attack - 3, enemy.attack);
playerInfo.health = Math.max(0, playerInfo.health - damgage);
console.log(
    enemy.name + 'attacked' + playerInfo.name + '.' + playerInfo.name + 'now has' + playerInfo.health + 'health remaining.'
);
//check player's health 
if (playerInfo.health <= 0 ){
    window.alert(playerInfo.name + 'has died');
    break;
} else {
    window.alert(playerInfo.name + 'still has' + playerInfo.health + 'health left.');
}
    }
};
// function to start a new game 
var startGame = function() {
    // reset player stats
    playerInfo.reset();
for(var i=0; i< enemyInfo.length; i++ ){
    // check player stats
    console.log(playerInfo);
    if (playerInfo.health > 0) {
        // let player know what round they are in 
        window.alert('Welcome to Robot Gladiators ! Round ' + ( i + 1 ) );
    var pickedEnemyObj = enemyInfo[i];
    // reset enemy.health b4 starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);
    // use debugger to pause script 
    // debugger;
    fight(pickedEnemyObj);
    // if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1 ){
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
    if (playerInfo.health > 0 ) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
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
                playerInfo.refillHealth();
                break;
            case "upgrade":
            case "UPGRADE": //new 
            playerInfo.upgradeAttack();
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

// function to set name
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null ){
        name = prompt ("What is your robot's name?");
    }
    console.log("Your robot's name is" + name);
    return name;
};
var playerInfo = {
    name: getPlayerName (),
    health: 100,
    attack: 10,
    money:10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack =10;

    }, //coma!
    refillHealth : function (){
        if (this.money >= 7 ){
            window.alert("Refilling player's health by 20 for 7 Dollars!");
        this.health += 20;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough moeny !");
        }
    }, //coma!
    upgradeAttack : function(){
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 Dollars!");
        this.attack += 6;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
var enemyInfo = [
    {
        name: "Roborto",
        attack : randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber (10, 14)
    },
    {
        name: "Robo Trumble",
        attack : randomNumber (10, 14)
    }
];

startGame();
