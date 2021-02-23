"use strict";
{
  const dropdownNav = document.querySelector(".dropdown-nav");
  const dropdownNavList = document.querySelector(".dropdown-nav-list");

  const mouseOverHandler = () => {
    dropdownNavList.classList.add("showing");
  };
  const mouseOutHandler = () => {
    dropdownNavList.classList.remove("showing");
  };

  dropdownNav.addEventListener("mouseover", mouseOverHandler);
  dropdownNav.addEventListener("mouseout", mouseOutHandler);
  dropdownNavList.addEventListener("mouseout", mouseOutHandler);
}
