function goContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  })
});
function scrollToPortfolio() {
  document.getElementById("portfolio").scrollIntoView({
    behavior: "smooth"
  });
}
