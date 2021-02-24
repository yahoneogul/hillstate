"use strict";
{
  const sliderItems = document.querySelectorAll(".slider-item");
  const pagination = document.querySelector(".pagination");
  const paginationItems = document.querySelectorAll(".pagination-item");
  let targetItem = null;
  let currentItem = null;
  let sliderIndex = 0;
  let sliderCount = 0;

  const dataIndexSetting = (elements) => {
    elements.forEach((element, index) => {
      element.dataset.index = index;
    });
  };
  const findTargetItem = (className) => {
    while (!targetItem.classList.contains(className)) {
      targetItem = targetItem.parentNode;
      if (targetItem.nodeName === "BODY") {
        targetItem = null;
        return;
      }
    }
  };

  const fadeOutslider = () => {
    if (currentItem) {
      currentItem.classList.remove("showing");
    }
    sliderIndex = sliderCount % 3;
    sliderItems[sliderIndex].classList.add("showing");
    currentItem = sliderItems[sliderIndex];
    sliderCount++;
  };

  const paginationClickHandler = (e) => {
    targetItem = e.target;
    findTargetItem("pagination-item");
    if (targetItem && targetItem.classList.contains("pagination-item")) {
      const targetIndex = targetItem.dataset.index;
      sliderIndex = targetIndex;
    }
  };
  fadeOutslider();
  setInterval(fadeOutslider, 4000);
  dataIndexSetting(paginationItems);
  pagination.addEventListener("click", paginationClickHandler);
}
