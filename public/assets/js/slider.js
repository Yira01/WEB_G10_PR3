function initializeSlider(imageChangeTime, totalImages, sliderRestartTime) {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderImages = document.querySelectorAll('.slider-container img');
  const slideCount = totalImages;
  const slideWidth = 500; 
  const transitionDuration = imageChangeTime / 1000; 

  let currentIndex = 0;
  let intervalId;

  function adjustImageSize() {
    sliderImages.forEach((image) => {
      image.style.width = `${slideWidth}px`;
    });
    sliderContainer.style.width = `${slideWidth * slideCount}px`;
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  window.addEventListener('resize', adjustImageSize);

  function startSlider() {
    adjustImageSize();
    intervalId = setInterval(nextSlide, imageChangeTime);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    sliderContainer.style.transition = `transform ${transitionDuration}s linear`;
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function restartSlider() {
    clearInterval(intervalId);
    setTimeout(() => {
      sliderContainer.style.transition = 'none';
      currentIndex = 0;
      sliderContainer.style.transform = `translateX(0)`;
      setTimeout(() => {
        sliderContainer.style.transition = `transform ${transitionDuration}s linear`;
        intervalId = setInterval(nextSlide, imageChangeTime);
      }, 10);
    }, sliderRestartTime);
  }

  startSlider();

  setTimeout(() => {
    restartSlider();
  }, 10000); 
}


initializeSlider(3000, 4, 10000); 











