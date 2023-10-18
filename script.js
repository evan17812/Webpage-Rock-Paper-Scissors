let computer;
let player;
let Win = 0;
let Loss = 0;
let Tied = 0;

function computerselection(){
    const rps = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * rps.length);
    alert("Computer chose " + rps[random]) ;
    computer = rps[random];
    return computer;
}

function statboard(){
    alert("Stat Board\r\n"+"Win: "+Win+"\r\n"+"Loss: "+Loss+"\r\n"+"Tied: "+Tied);
}

function playagain(){
    if(confirm("Play again?") == true){
        run();
    }else{
        alert("Bye!")
    }
}

function playerselection() {
    var input = prompt("Please choose R,P,S")
    player = input.toUpperCase();
    console.log(player);
    if(player === 'R'){
        alert("You chose Rock");
        player = "Rock";
        console.log(player);
    }
    else if (player === 'P'){
        alert("You chose Paper");
        player = "Paper";
        console.log(player);
    }
    else {
        alert("You chose Scissors");
        player = "Scissors";
        console.log(player);
    }
    return player;
}

function compare(){
    if(player == computer){
        alert("You Tied!");
        Tied = Tied+1;
        return Tied;
    }
    else if(player=='Rock'){
        if(computer=='Scissors'){
            alert("You Win!")
            Win = Win+1;
            return Win;
        }
        else{
            alert("You Lose!")
            Loss = Loss+1;
            return Loss;
        }
    }
    else if(player=='Paper'){
        if(computer=='Rock'){
            alert("You Win!")
            Win = Win+1;
            return Win;
        }
        else{
            alert("You Lose!")
            Loss = Loss+1;
            return Loss;
        }
    }
    else{
        if(computer=='Paper'){
            alert("You Win!")
            Win = Win+1;
            return Win;
        }
        else{
            alert("You Lose!")
            Loss = Loss+1;
            return Loss;
        }
    }
}
function run(){
    playerselection();
    computerselection();
    compare();
    statboard();
    playagain();
}
    
    

    



