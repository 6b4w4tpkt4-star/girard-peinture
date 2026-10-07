const burger=document.querySelector(".burger"),nav=document.querySelector("#nav");
burger?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
function fakeSubmit(e){e.preventDefault();const note=document.querySelector("#form-note");note.textContent="Merci ! Votre demande est prête à être traitée.";note.style.color="#087be5";return false;}
