function moveFocus(dir){
 const items=[...document.querySelectorAll('button')];
 let i=items.indexOf(document.activeElement); if(i<0)i=0;
 if(dir==='next') i=(i+1)%items.length; else i=(i-1+items.length)%items.length;
 items[i].focus();
}
fetch('apps.json').then(r=>r.json()).then(d=>{
count.innerText='Có '+d.length+' ứng dụng.';
list.innerHTML=d.map(a=>`<div class='card'><div class='left'><h2>${a.name}</h2><p>${a.package}</p></div><div>${a.installed?`<button>Đã mới nhất</button><button>Gỡ cài</button>`:`<button onclick="location.href='${a.apk}'">Cài đặt</button>`}</div></div>`).join('');
document.querySelectorAll('button').forEach(b=>b.tabIndex=0);
document.querySelector('button').focus();
});
refresh.onclick=()=>location.reload();
document.addEventListener('keydown',e=>{
 if(['ArrowDown','ArrowRight'].includes(e.key))moveFocus('next');
 if(['ArrowUp','ArrowLeft'].includes(e.key))moveFocus('prev');
 if(e.key==='Enter')document.activeElement&&document.activeElement.click();
});