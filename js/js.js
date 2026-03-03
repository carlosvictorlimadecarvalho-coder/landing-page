function saibaMais(){
    window.location.href = "mais.html";
}
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector("#pt1").classList.add("ativo");
        document.querySelector("#pt2").classList.add("ativo");
    }, 300);
});

const section = document.querySelector(".horizontal-section");
const content = document.querySelector(".horizontal-content");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  
  if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
    const scrollInside = scrollPosition - sectionTop;
    content.style.transform = `translateX(-${scrollInside}px)`;
  }
});
