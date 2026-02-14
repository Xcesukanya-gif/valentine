const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const result=document.getElementById("result");
const bg=document.querySelector(".flower-bg");

/* ปุ่ม no หนี */
noBtn.addEventListener("mouseover",()=>{
    const x=Math.random()*250-120;
    const y=Math.random()*150-80;
    noBtn.style.transform=`translate(${x}px,${y}px)`;
});

/* กด yes */
yesBtn.addEventListener("click",()=>{
    result.innerHTML="💖 Yayyy! Sekarang kamu valentine saya Terima kasih🌸";
});

/* กลีบดอกไม้ตกทั้งจอ */
function createPetal(){
    const p=document.createElement("div");
    p.classList.add("petal");
    p.innerHTML=["🌸","💕","🌺","🌹","💖"][Math.floor(Math.random()*4)];
    p.style.left=Math.random()*100+"vw";
    p.style.fontSize=(18+Math.random()*35)+"px";
    p.style.animationDuration=(5+Math.random()*5)+"s";
    bg.appendChild(p);

    setTimeout(()=>p.remove(),9000);
}

/* เริ่มตกทันทีเมื่อเข้าเว็บ */
setInterval(createPetal,180);

// ฝนหัวใจ+ดอกไม้
function startLoveRain(){
    setInterval(()=>{
        createItem("🌸",flowerBg);
        createItem("🌹",flowerBg);
        createItem("💖",heartBg);
        createItem("💕",heartBg);
    },180);
}

function createItem(icon,container){
    const el=document.createElement("div");
    el.classList.add("f");
    el.innerHTML=icon;
    el.style.left=Math.random()*100+"vw";
    el.style.fontSize=(20+Math.random()*40)+"px";
    el.style.animationDuration=(4+Math.random()*4)+"s";
    container.appendChild(el);

    setTimeout(()=>el.remove(),8000);
}
