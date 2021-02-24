"use strict";
{
  const FAQNavList = document.querySelector(".FAQ-nav-list");
  const FAQNavItems = document.querySelectorAll(".FAQ-nav-item");
  const FAQContentLists = document.querySelectorAll(".FAQ-content-list");
  const FAQContents = document.querySelectorAll(".FAQ-content-body");

  //index  setting
  const dataIndexSetting = () => {
    for (let i = 0; i < FAQNavItems.length; i++) {
      FAQNavItems[i].dataset.index = i;
      FAQContentLists[i].dataset.index = i;
    }
  };
  //활성화
  const activate = (items, index) => {
    items[index].classList.add("active");
  };
  //비활성화
  const inactivate = () => {
    FAQNavItems.forEach((FAQNavItem) => {
      FAQNavItem.classList.remove("active");
    });
    FAQContentLists.forEach((FAQContentList) => {
      FAQContentList.classList.remove("active");
    });
    FAQContents.forEach((FAQContent) => {
      FAQContent.classList.remove("active");
    });
  };

  const FAQClickHandler = (e) => {
    const targetItem = e.target;
    const targetIndex = targetItem.dataset.index;

    if (targetItem.classList.contains("FAQ-nav-item")) {
      inactivate();
      activate(FAQContentLists, targetIndex);
      activate(FAQNavItems, targetIndex);
    }
  };
  dataIndexSetting();
  activate(FAQContentLists, 0);
  FAQNavList.addEventListener("click", FAQClickHandler);
}
