const letters = document.querySelectorAll('#title span');

function randomJump() {
  const letter = letters[Math.floor(Math.random() * letters.length)];
  letter.classList.add('jump');
  
  setTimeout(() => letter.classList.remove('jump'), 500);

  const next = Math.random() * 1000 ** Math.random()*100 ;
  setTimeout(randomJump, next);
}

randomJump();
