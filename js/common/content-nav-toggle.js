"use strict";
{
  const contentNavList = document.querySelector(".content-nav-list");
  const contentNavItems = document.querySelectorAll(".content-nav-item");
  const contents = document.querySelectorAll(".content");

  //데이터 인덱스 설정
  const dataIndexSetting = () => {
    for (let i = 0; i < contents.length; i++) {
      contentNavItems[i].dataset.index = i;
      contents[i].dataset.index = i;
    }
  };

  //활성화
  const activate = (items, index) => {
    items[index].classList.add("active");
  };
  //비활성화
  const inactivate = () => {
    contentNavItems.forEach((contentNavItem) => {
      contentNavItem.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });
  };

  const contentsNavClickHandler = (e) => {
    const targetItem = e.target;
    const targetIndex = targetItem.dataset.index;

    if (targetItem.classList.contains("content-nav-item")) {
      inactivate();
      activate(contents, targetIndex);