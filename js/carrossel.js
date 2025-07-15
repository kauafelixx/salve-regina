document.addEventListener('DOMContentLoaded', function () {
  const carouselPlaceholders = document.querySelectorAll('.carrossel-placeholder');

  carouselPlaceholders.forEach(placeholder => {
    const imageWrappers = placeholder.querySelectorAll('.img-wrapper');
    let currentIndex = 0;
    const intervalTime = 5000;

    if (imageWrappers.length > 0) {
      imageWrappers[currentIndex].classList.add('active');
    }

    function showNextImage() {
      imageWrappers[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % imageWrappers.length;
      imageWrappers[currentIndex].classList.add('active');
    }

    if (imageWrappers.length > 1) {
      setInterval(showNextImage, intervalTime);
    }
  });
});
