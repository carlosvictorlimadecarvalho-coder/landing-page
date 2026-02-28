function saibaMais(){
    window.location.href = "mais.html";
}
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector("#pt1").classList.add("ativo");
        document.querySelector("#pt2").classList.add("ativo");
    }, 300);
});
const welcome = document.querySelector('.welcome');
const header = document.querySelector('.header');
window.addEventListener("scroll", function(){
    if(this.window.scrollY>50){
        welcome.classList.add("small");
        welcome.style.display = 'flex';
    } else{
        welcome.classList.remove("small");
        
    }
});