//Тоглогчийн ээлжийг хадгалах хувьсагч

var activePlayer = 0;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

var scores = [0,0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;

//Програм эхлэхэд бэлтгэе

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display="none";
document.querySelector(".btn-roll").addEventListener("click", function(){

    //Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
    var diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.style.display="block";
    diceDom.src = 'dice-'+ diceNumber +'.png';

//Шоо нэгээс ялгаатай тоотой буусан тохиолдолд идэвхитэй тоглогчийн оноог нэмж өгнө.
    if (diceNumber !== 1 ) {
        roundScore = roundScore + diceNumber;

        document.getElementById("current-"+ activePlayer).textContent = roundScore;
    } else {

        document.getElementById("current-"+ activePlayer).textContent = 0;

        if (activePlayer === 0) {activePlayer = 1;
            document.querySelector('.player-0-panel').classList.toggle("active");
            document.querySelector('.player-1-panel').classList.toggle("active");

        } else {activePlayer = 0;

         };
         diceDom.style.display="none";
    }
});
