//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Шоо шидэх event listner
document.querySelector(".btn-roll").addEventListener("click", function () {
    //Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
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
});

//NEW GAME button event listner
document.querySelector(".btn-new").addEventListener("click", function () { alert("Start button") });


//HOLD button event listner
document.querySelector(".btn-hold").addEventListener("click", function () {
    //тоглогчийн ээлжийн оноог нийт оноон дээр нэмнэ
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //тоглогчийн ээлжийн оноог нийт оноон дээр нэмнэ
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    //тоглогчийн ээлжийн оноог нийт оноон дээр нэмнэ

    if (scores[activePlayer] >= 20) { document.getElementById("name-" + activePlayer).textContent = "WINNER!" } else { switchPlayer(); }


});


function switchPlayer() {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    diceDom.style.display = "none";
}
