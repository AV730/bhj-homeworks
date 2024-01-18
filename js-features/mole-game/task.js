const dead = document.getElementById("dead");
const lost = document.getElementById("lost");


for(let i=1; i <= 9 ; i++) {
  getHole(i).onclick = function() {
    if(getHole(i).classList.contains('hole_has-mole')) {
      dead.textContent++;
      if(dead.textContent == 10) {
        endGame('win');
      }
    } else {
      lost.textContent++;
      if(lost.textContent == 5) {
        endGame('lose');
      }
   }
  };
}

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function endGame(result) {
  dead.textContent = 0;
  lost.textContent = 0;

  if(result === 'win') {
    alert('Ура! Победа!');
  } else  {
    alert('Упс... Вы проиграили!');
  }

  return;
}