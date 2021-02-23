{
  const sectionNav = document.querySelector(".section-nav");
  const sectionNavItems = document.querySelectorAll(".section-nav-item");
  const contentSections = document.querySelectorAll(".content-section");

  //index setting
  const dataIndexSetting = () => {
    for (let i = 0; i < sectionNavItems.length; i++) {
      sectionNavItems[i].dataset.index = i;
      contentSections[i].dataset.index = i;
    }
  };
  //활성화
  const activate = (items, index) => {
    items[index].classList.add("active");
  };
  //비활성화
  const inactivate = () => {
    sectionNavItems.forEach((sectionNavItem) => {
      sectionNavItem.classList.remove("active");
    });
    contentSections.forEach((contentSection) => {
      contentSection.classList.remove("active");
    });
  };

  const sectionNavClickHandler = (e) => {
    let targetItem = e.target;
    while (!targetItem.classList.contains("section-nav-item")) {
      targetItem = targetItem.parentNode;
      if (targetItem === "BODY") {
        return;
      }
    }
    if (targetItem.classList.contains("section-nav-item")) {
      const targetIndex = targetItem.dataset.index;
      inactivate();
      activate(sectionNavItems, targetIndex);
      activate(contentSections, targetIndex);
    }
  };
  dataIndexSetting();
  activate(sectionNavItems, 0);
  activate(contentSections, 0);
  sectionNav.addEventListener("click", sectionNavClickHandler);
}
