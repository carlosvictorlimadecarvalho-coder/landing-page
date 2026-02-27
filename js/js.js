function saibaMais(){
    window.location.href = "mais.html";
}
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector("#pt1").classList.add("ativo");
        document.querySelector("#pt2").classList.add("ativo");
    }, 100);
});
const welcome = document.querySelector('.welcome');
const header = document.querySelector('.header');
window.addEventListener("scroll", function(){
    if(this.window.scrollY>50){
        welcome.classList.add("small");
        
    } else{
        welcome.classList.remove("small");
    }
});