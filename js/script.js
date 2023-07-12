document.querySelector("#open-menu").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("nav-open");
});
document.querySelector("#close-menu").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("nav-open");
});
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll links
    if (href !== "#" && href.startsWith("#")) {
      const selectEl = document.querySelector(href);
      selectEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close menu when click link
    if (link.classList.contains("main-nav-link")) {
      document.querySelector(".header").classList.toggle("nav-open");
    }
  });
});
//Sticky Navigation
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
