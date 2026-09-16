const menu=document.querySelector('.menu');
menu.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim(),email=document.getElementById('email').value.trim(),offer=document.getElementById('offer').value,message=document.getElementById('message').value.trim();const destination='damien.nicolas087@gmail.com';const subject=encodeURIComponent('Demande de projet — Nexora Studio');const body=encodeURIComponent(`Bonjour Nexora Studio,\n\nNom / entreprise : ${name}\nEmail : ${email}\nOffre : ${offer}\n\nProjet :\n${message}`);window.location.href=`mailto:${destination}?subject=${subject}&body=${body}`});
