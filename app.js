const gameCells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restartBtn = document.querySelector('.restartBtn');
const alertBox = document.querySelector('.alert-box');
// making variable
let firstPlayer = 'X';
let SecondPlayer = '0';
let playerTurn = firstPlayer;

// Function for start the game
function startGame(){
    gameCells.forEach((cell) =>{
        cell.addEventListener('click', clickHandle);
    });
}

// Function for click in cell
const clickHandle = (e)=>{
    e.target.textContent = playerTurn;
    if(winCon()){
    showMsg(`${playerTurn} is a winner!`);
    disableCells();
    }else if(checkTie()){
    showMsg(`Its a tie!`); 
    disableCells();
    }else{
    changeTurn(); 
    showMsg(`Its ${playerTurn} chance!`); 
    }
 };

// calling start game function
 startGame();
function changeTurn(){
    if(playerTurn === firstPlayer){
        playerTurn = SecondPlayer;
    }else {
        playerTurn = firstPlayer;
    }
 }

 //  This function is for checking winning conditions
function winCon(){
    let  winConPos = [[0,1,2] ,[3,4,5] ,[6,7,8] ,[0,3,6] ,[1,4,7] ,[2,5,8] ,[0,4,8] ,[3,4,6] ];
    for( let i = 0 ; i<winConPos.length ; i++){
     let [pos1, pos2, pos3] = winConPos[i];
     // console.log(`${pos1} , ${pos2} ,${pos3}`);
     if(gameCells[pos1].textContent===gameCells[pos2].textContent &&
         gameCells[pos2].textContent===gameCells[pos3].textContent && 
         gameCells[pos1].textContent !== ''){
             return true;
         }
     } 
     return false;
 };
 
//  This function is for checking tie condition
const checkTie = ()=>{
    let emptyCellCount = 0;
    gameCells.forEach((cell)=>{
        if(cell.textContent===""){
            emptyCellCount++;
        }
    });
    return emptyCellCount==0 && !winCon();
 };

// This function is used to disable cell after winnig or tie
const disableCells = ()=>{
    gameCells.forEach((cell)=>{
        cell.removeEventListener*('click',clickHandle);
    });
};

//  This function is used to show alert
const showMsg = (msg)=>{
    alertBox.style.display = 'block';
    alertBox.textContent = msg;
    setTimeout(()=>{
        alertBox.style.display = 'none'; 
    },3000);
}
// This function is used to restart the game
const restartGame = ()=>{
    gameCells.forEach((cell)=>{
        cell.textContent = "";
    })
    startGame();
}
restartBtn.addEventListener('click', restartGame);

