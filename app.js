//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer, scores, roundScore, isNewGame;
var diceDom = document.querySelector(".dice");

//Програм эхлэхэд бэлтгэе
startGame();

//Шоо шидэх event listner
document.querySelector(".btn-roll").addEventListener("click", function () {
    //Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

    if (isNewGame === true) {

        var diceNumber = Math.floor(Math.random() * 6) + 1;
        diceDom.style.display = "block";
        diceDom.src = 'dice-' + diceNumber + '.png';

        //Шоо нэгээс ялгаатай тоотой буусан тохиолдолд идэвхитэй тоглогчийн оноог нэмж өгнө.
        if (diceNumber !== 1) {
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            switchPlayer();
        }
    }

});




//HOLD button event listner
document.querySelector(".btn-hold").addEventListener("click", function () {

    if (isNewGame === true) {
        //тоглогчийн ээлжийн оноог нийт оноон дээр нэмнэ
        scores[activePlayer] = scores[activePlayer] + roundScore;
        //тоглогчийн ээлжийн оноог нийт оноон дээр нэмнэ
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        //тоглогчийн ээлжийн оноог нийт оноон дээр нэмнэ

        if (scores[activePlayer] >= 20) { document.getElementById("name-" + activePlayer).textContent = "WINNER!"; isNewGame = false; } else { switchPlayer(); }
    }


});


function switchPlayer() {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    diceDom.style.display = "none";
}


//NEW GAME button event listner
document.querySelector(".btn-new").addEventListener("click", function () { startGame() });

function startGame() {

    isNewGame = true;
    console.log("start game daragdav");

    //Тоглогчийн ээлжийг хадгалах хувьсагч
    activePlayer = 0;

    //Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

    //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    diceDom.style.display = "none";
    document.getElementById("name-0").textContent = 'Player 1';
    document.getElementById("name-1").textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove("active");
    document.querySelector('.player-1-panel').classList.remove("active");
    document.querySelector('.player-0-panel').classList.add("active");


}
