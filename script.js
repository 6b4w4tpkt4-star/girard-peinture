const menu=document.querySelector(".menu");
const mobile=document.querySelector(".mobile-nav");
menu?.addEventListener("click",()=>mobile.classList.toggle("open"));
document.querySelectorAll(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>mobile.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible");});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const top=document.querySelector(".top");
window.addEventListener("scroll",()=>top.classList.toggle("show",window.scrollY>500));
top.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
