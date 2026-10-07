const burger=document.querySelector(".burger"),nav=document.querySelector("#nav");
burger?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
function fakeSubmit(e){e.preventDefault();const note=document.querySelector("#form-note");note.textContent="Merci ! Votre demande est prête à être traitée.";note.style.color="#087be5";return false;}

// === Animations V3.1 ===
const animatedItems = document.querySelectorAll(".section-head,.service,.projects .section-head,.project-gallery figure,.benefits>div,.quote,.contact-grid");
animatedItems.forEach((el,i)=>{
  el.classList.add(i % 3 === 1 ? "reveal-right" : i % 3 === 2 ? "reveal" : "reveal-left");
});
const revealObserver = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12, rootMargin:"0px 0px -50px 0px"});
document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el=>revealObserver.observe(el));

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll("#nav a")];
const navObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{threshold:.45});
sections.forEach(s=>navObserver.observe(s));
