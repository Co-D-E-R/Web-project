const p1={
    score: 0,
    button: document.querySelector('#p1'),
    display: document.querySelector('#p1Display')
}
const p2={
    score: 0,
    button: document.querySelector('#p2'),
    display: document.querySelector('#p2Display')
}


const RestButton=document.querySelector('#Reset');
const playertoSelect=document.querySelector('#play');
let winningScore =3;
let isGameOver= false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}





p1.button.addEventListener('click',function(){
    updateScores(p1,p2)

})
p2.button.addEventListener('click',function(){
    updateScores(p2,p1)
 })

 playertoSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})


 RestButton.addEventListener('click',reset)

 function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}