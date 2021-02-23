"use strict";
{
  const contentNav = document.querySelector(".content-nav");
  const contentNavItems = document.querySelectorAll(".content-nav-item");
  const contents = document.querySelectorAll(".content");

  //data-index setting
  for (let i = 0; i < contentNavItems.length; i++) {
    contentNavItems[i].dataset.index = i;
    contents[i].dataset.index = i;
  }

  const moveToContent = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const clickHandler = (e) => {
    const targetItem = e.target;
    const targetIndex = targetItem.dataset.index;
    const targetPosition = contents[targetIndex].offsetTop;

    if (targetItem.classList.contains("content-nav-item")) {
      moveToContent(targetPosition);
    }
  };

  contentNav.addEventListener("click", clickHandler);
}
