
function  playerName(name: string): void {

    console.log("Player name is : " + name); // to know the name of the player
}
//playerName("Sachin"); // calling function with parameter value  
function  playerName2(name: string): void {

    console.log("Player name 2 is : " + name); // to know the name of the player
}

function playerGame(game: (name: string) => void): void {
game("Cricket"); //  to know game we are calling function with parameter value 
game("Football"); //  to know game we are calling function with parameter value
}

 playerGame(playerName2); // calling function with parameter value

