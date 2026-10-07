const burger=document.querySelector('.burger'),nav=document.querySelector('#nav');
burger.addEventListener('click',()=>{nav.classList.toggle('open')});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
