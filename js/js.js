function saibaMais(){
    window.location.href = "mais.html";
}
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector("#pt1").classList.add("ativo");
        document.querySelector("#pt2").classList.add("ativo");
    }, 300);
});