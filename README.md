# 🎮 Tic Tac Toe Game — JavaScript

This project is a simple **Tic Tac Toe game** built using **HTML, CSS, and JavaScript DOM manipulation**.

It allows two players to take turns clicking on grid boxes and records their moves to determine a winner.

---

# 📌 Features

✅ Two-player gameplay (Player X and Player O)
✅ Turn switching logic
✅ Move tracking using arrays
✅ Winner checking logic (planned with `checkWinner()` function)
✅ DOM event handling using `addEventListener()`

---

# 📂 Code Explanation

## 1️⃣ Selecting Game Boxes

```js
let divs = document.querySelectorAll('.parent-div div')
```

* Selects all the child `div` elements inside `.parent-div`
* These represent the **game cells**

---

## 2️⃣ Game State Variables

```js
let turn = 0
let player1moves = []
let player2moves = []
```

* `turn` → Controls whose turn it is

  * `0` → Player 1 (X)
  * `1` → Player 2 (O)

* `player1moves` → Stores positions clicked by Player 1

* `player2moves` → Stores positions clicked by Player 2

---

## 3️⃣ Winning Combinations

```js
let winningMoves = [
    [1,2,3]
]
```

This array stores **winning patterns**.

Example full version:

```js
let winningMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
```

Each number represents a box position.

---

## 4️⃣ Winner Checking Function

```js
function checkWinner(moves){
    // checks if player moves match any winning pattern
}
```

This function will compare the player's moves with `winningMoves`.

Example implementation:

```js
function checkWinner(moves){
    return winningMoves.some(pattern =>
        pattern.every(num => moves.includes(num))
    )
}
```

---

## 5️⃣ Click Event Logic

```js
divs.forEach(d =>{
    d.addEventListener('click',() =>{
```

* Loops through each game box
* Adds a click event listener

---

## 6️⃣ Player Turn Logic

### Player 1

```js
if(turn==0){
    d.innerText='x'
    turn=1
    player1moves.push([...divs].indexOf(d)+1)
}
```

* Adds **X**
* Stores move position
* Switches turn to Player 2

---

### Player 2

```js
else{
    d.innerText='o'
    player2moves.push([...divs].indexOf(d)+1)
    turn=0
}
```

* Adds **O**
* Stores move position
* Switches turn back to Player 1

---

## 7️⃣ Finding Box Position

```js
[...divs].indexOf(d)+1
```

Explanation:

* `divs` is a NodeList
* Spread operator `...` converts it into an array
* `indexOf(d)` gets clicked box index
* `+1` makes numbering start from 1 instead of 0

---

## 8️⃣ Calling Winner Check

⚠️ Small Bug in Your Code

You wrote:

```js
checkWinner(play1moves)
```

Correct:

```js
checkWinner(player1moves)
```

---

## ✅ Improved Click Logic Example

```js
divs.forEach(d =>{
    d.addEventListener('click',() =>{

        if(d.innerText !== '') return

        if(turn==0){
            d.innerText='x'
            player1moves.push([...divs].indexOf(d)+1)

            if(checkWinner(player1moves)){
                alert("Player X Wins!")
            }

            turn=1
        }
        else{
            d.innerText='o'
            player2moves.push([...divs].indexOf(d)+1)

            if(checkWinner(player2moves)){
                alert("Player O Wins!")
            }

            turn=0
        }

    })
})
```

---

# 🚀 How to Run

1. Create an HTML file with a grid layout.
2. Link your JavaScript file.
3. Open the HTML file in a browser.
4. Click boxes to play.

---


# 👩‍💻 Author

Created as a JavaScript practice project for learning:

* DOM Manipulation
* Event Handling
* Game Logic
* Arrays

