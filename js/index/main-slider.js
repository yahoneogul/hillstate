{
  const SHOWING_CLASS = "showing";
  const firstSlide = document.querySelector(
    ".slider .slider-item:first-of-type",
  );
  const slide = () => {
    const currentSlide = document.querySelector(`.slider .${SHOWING_CLASS}`);
    if (currentSlide) {
      currentSlide.classList.remove(SHOWING_CLASS);
      const nextSlide = currentSlide.nextElementSibling;
      if (nextSlide) {
        nextSlide.classList.add(SHOWING_CLASS);
      } else {
        firstSlide.classList.add(SHOWING_CLASS);
      }
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  };
  slide();
  setInterval(slide, 5000);
}
