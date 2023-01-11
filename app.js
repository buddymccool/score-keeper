// const currentScore = document.querySelector("#currentScore");

const p1 = {
    score: 0,
    button: document.querySelector("#p1Btn"),
    display: document.querySelector("#p1Display"),
    name: "Player 1"
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2Btn"),
    display: document.querySelector("#p2Display"),
    name: "Player 2"
}


// const p1Btn = document.querySelector("#p1Btn");
// const p2Btn = document.querySelector("#p2Btn");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");

const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

// let p1Score = 0;
// let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            // player.display.textContent = player.score;
            // alert(`${player.name} wins!!!`)
        } 
        player.display.textContent = player.score;   
    }
}

p1.button.addEventListener('click', function(){
    updateScore(p1,p2)
})
p2.button.addEventListener('click', function(){
    updateScore(p2,p1)
})

// p1Btn.addEventListener('click', function(){
//     if(!isGameOver){
//         p1Score += 1;
//         if(p1Score === winningScore){
//             isGameOver = true;
//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//             p1Btn.disabled = true;
//             p2Btn.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// })
// p2Btn.addEventListener('click', function(){
//     if(!isGameOver){
//         p2Score += 1;
//         if(p2Score === winningScore){
//             isGameOver = true;
//             p2Display.classList.add('has-text-success');
//             p1Display.classList.add('has-text-danger');
//             p1Btn.disabled = true;
//             p2Btn.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// })

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = p1Score;
    // p2.display.textContent = p2Score;
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}