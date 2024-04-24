// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const likeGlyphs = document.querySelectorAll('.like-glyph');
  likeGlyphs.forEach(glyph => {
    glyph.addEventListener('click', handleLikeClick);
  });
});

function handleLikeClick(event) {
  const heart = event.target;

  mimicServerCall()
  .then(() => {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
      heart.className = 'activated-heart';
    } else {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })

  .catch(error => {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modal.classList.remove('hidden');
    modalMessage.textContent = error;

    setTimeout(() => {
      modal.classList.add('hidden');
    }, 3000);
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
