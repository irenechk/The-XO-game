let divs= document.querySelectorAll('.parent-div div')
let turn=0
let player1moves=[]
let player2moves=[]

let winningMoves=[
    [1,2,3]
]
function checkWinner(moves){
    //checks if the moves include the winning moves
}
divs.forEach(d =>{
    d.addEventListener('click',() =>{
        if(turn==0){
        d.innerText='x'
        turn=1
        player1moves.push([...divs].indexOf(d)+1)
        console.log(player1moves); //[0]
        }else{
        d.innerText='o'
        player2moves.push([...divs].indexOf(d)+1)
        console.log(player2moves); //[0]
        turn=0
        }
        checkWinner(play1moves)
        checkWinner(player2moves)
    })
})