"use strict";
{
  const FAQContentHeaders = document.querySelectorAll(".FAQ-content-header");
  const icons = document.querySelectorAll(".icon");
  const FAQContents = document.querySelectorAll(".FAQ-content-body");

  //data-index-setting
  for (let i = 0; i < icons.length; i++) {
    FAQContentHeaders[i].dataset.index = i;
    icons[i].dataset.index = i;
    FAQContents[i].dataset.index = i;
  }

  FAQContentHeaders.forEach((FAQContentHeader) => {
    FAQContentHeader.addEventListener("click", () => {
      const targetIndex = FAQContentHeader.dataset.index;
      icons[targetIndex].classList.toggle("active");
      FAQContents[targetIndex].classList.toggle("active");
    });
  });
}
