

function showCard() {
  const card = document.getElementById('card');
  const button = document.querySelector('.button');
  const lines = document.querySelectorAll('.letter .line'); 
  const audio = document.getElementById('backgroundMusic');
  
  card.classList.add('show');
  button.style.display = 'none';
  
  audio.play();

  lines.forEach((line, index) => {
    line.style.animation = 'none';
    line.offsetHeight;
    line.style.animation = `moveText 2s ease-out ${index * 4.5}s forwards`;
  });
}

function hideCard() {
  const card = document.getElementById('card');
  const button = document.querySelector('.button');
  const audio = document.getElementById('backgroundMusic');
  
  card.classList.remove('show');
  button.style.display = 'block';
  

  audio.pause();
  audio.currentTime = 0;
}
