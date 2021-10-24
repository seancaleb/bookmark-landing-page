// HEADER
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");

// FEATURES
const featuresNav = document.querySelectorAll(".features__nav-title");
const featuresMain = document.querySelectorAll(".features__main");

// LOGO
const logoText = document.querySelector("#logoText");
const logoCircle = document.querySelector("#logoCircle");
const logoIcon = document.querySelector("#logoIcon");

// FAQ
const faqContent = document.querySelectorAll(".faq__content");
const faqText = document.querySelectorAll(".faq__text");

// ------------------------- FAQ FUNCTION -------------------------
const toggleItem = (item, text) => {
  const faqTargetContent = item.querySelector(".faq__content");
  const activeItem = document.querySelector(".activeItem");

  if (item.firstElementChild.classList.contains("activeItem")) {
    text.removeAttribute("style");
    item.firstElementChild.classList.remove("activeItem");
  } else {
    if (activeItem) {
      faqContent.forEach((el) =>
        el.firstElementChild.classList.remove("activeItem")
      );
      faqText.forEach((el) => el.removeAttribute("style"));
    }
    text.style.height = text.scrollHeight + "px";
    item.firstElementChild.classList.add("activeItem");
  }
};

const toggleFaq = () => {
  let prev;
  faqContent.forEach((el, index) => {
    el.addEventListener("click", () => {
      toggleItem(el, faqText[index]);
    });
  });
};

// ------------------------- FEATURES FUNCTION -------------------------
const toggleFeatures = () => {
  featuresMain[0].classList.add("active");
  featuresNav[0].classList.add("active");

  featuresNav.forEach((el, index) => {
    el.addEventListener("click", () => {
      featuresMain.forEach((el) => el.classList.remove("active"));
      featuresNav.forEach((el) => el.classList.remove("active"));

      featuresMain[index].classList.add("active");
      el.classList.add("active");
    });
  });
};

const app = () => {
  // HEADER
  burger.addEventListener("click", () => {
    if (burger.classList.contains("open")) {
      burger.classList.remove("open");

      logoText.classList.remove("fill-white");
      logoCircle.classList.remove("fill-white");
      logoIcon.classList.remove("fill-transparent");

      nav.classList.remove("show");
      nav.classList.add("hide");
    } else {
      burger.classList.add("open");

      logoText.classList.add("fill-white");
      logoCircle.classList.add("fill-white");
      logoIcon.classList.add("fill-transparent");

      nav.classList.remove("hide");
      nav.classList.add("show");
    }

    // RESIZE ANIMATION STOPPER NAV MENU
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        nav.classList.contains("show") && nav.classList.remove("show");
        nav.classList.contains("hide") && nav.classList.remove("hide");
        burger.classList.contains("open") && burger.classList.remove("open");

        logoText.classList.contains("fill-white") &&
          logoText.classList.remove("fill-white");
        logoCircle.classList.contains("fill-white") &&
          logoCircle.classList.remove("fill-white");
        logoIcon.classList.contains("fill-transparent") &&
          logoIcon.classList.remove("fill-transparent");
      }
    });
  });

  // FEATURES
  toggleFeatures();

  // FAQS
  toggleFaq();
};

app();
