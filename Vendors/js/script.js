// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
// let btn = document.querySelector(".circle-video");
// let spalsh = document.createElement("div");
// spalsh.setAttribute('id',"open");
// document.body.appendChild(spalsh);
var arrow = document.getElementById("open");
var play = document.getElementById("play");
var splash = document.getElementById("splash");
var close = document.getElementById("close");
var dat = document.getElementById("date");
play.style.cursor = "pointer";
window.onscroll = function () {
  if (window.scrollY >= 200) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};
arrow.addEventListener("click", (ev) => {
  window.scrollTo(0, 0);
});
var date = new Date();
dat.innerHTML = `Devmediapro | copyright © ${date.getFullYear()}`;

play.addEventListener("click", (ev) => {
  splash.classList.toggle("disp");
});
close.addEventListener("click", (ev) => {
  splash.classList.remove("disp");
  //splash.style.display = 'none !important';
});
// sticky header
var header = document.getElementById('headersticky');
window.addEventListener('scroll',(ev)=>{
  
  header.classList.toggle('fixed-top',window.scrollY >= 80);
    
})
