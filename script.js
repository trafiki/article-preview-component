const shareButton = document.querySelector('.share-icon');
const socialShare = document.querySelector('.social-share');
shareButton.addEventListener('click', () => {
  socialShare.classList.toggle('flex-container');
})