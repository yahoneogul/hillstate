"use strict";
{
  const slider = document.querySelector(".slider");
  const sliderItems = document.querySelectorAll(".slider-item");
  const pagination = document.querySelector(".pagination");
  const paginationItems = document.querySelectorAll(".pagination-item");
  let targetItem = null;
  let currentItem = null;
  let timer = null;
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

  const fadeOutSlider = (index) => {
    if (currentItem) {
      currentItem.classList.remove("showing");
    }
    sliderIndex = index;
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
      fadeOutSlider(targetIndex);
    }
  };
  const autoSlider = () => {
    timer = setInterval(fadeOutSlider, 4000);
  };
  const stopSlider = () => {
    clearInterval(timer);
  };

  dataIndexSetting(paginationItems);
  fadeOutSlider(0);
  autoSlider();
  slider.addEventListener("mouseover", stopSlider);
  slider.addEventListener("mouseleave", autoSlider);
  pagination.addEventListener("click", paginationClickHandler);
}
