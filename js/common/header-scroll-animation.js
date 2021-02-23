{
  const globalHeader = document.querySelector(".global-header");
  const contentNav = document.querySelector(".content-nav");
  const logoImg = document.querySelector(".header-logo-img");

  const scrollHandler = () => {
    const globalHeaderHeight = globalHeader.clientHeight;
    //widtn가 1024px 보다 클때만 실행
    if (window.innerWidth > 1024) {
      if (window.scrollY > 0) {
        globalHeader.classList.add("sticky");
        logoImg.setAttribute("src", "./images/common/logo/logo-default.png");
        if (contentNav) {
          contentNav.classList.add("sticky");
          contentNav.style.top = `79px`;
        }
      } else {
        globalHeader.classList.remove("sticky");
        logoImg.setAttribute("src", "./images/common/logo/logo-white.png");
        if (contentNav) {
          contentNav.classList.remove("sticky");
          contentNav.style.top = `120px`;
          logoImg.setAttribute("src", "./images/common/logo/logo-default.png");
        }
      }
    }
  };

  window.addEventListener("scroll", scrollHandler);
}
