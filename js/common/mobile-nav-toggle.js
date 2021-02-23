"use strict";
{
  const mobileButton = document.querySelector(".mobile-nav-button");
  const mainNav = document.querySelector(".main-nav");

  const buttonClickHandler = () => {
    mainNav.classList.toggle("showing");
    mobileButton.classList.toggle("clicked");
  };

  mobileButton.addEventListener("click", buttonClickHandler);
}
