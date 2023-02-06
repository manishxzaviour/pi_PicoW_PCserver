const menuB= document.getElementById("menuB");
const menuContainer= document.getElementById("menu_container");
const content=document.getElementById("content");
const scriptReq=['./boot.js'];
var menuFlag=0;
var bootFlag=0;

function menuBpress(){
    if(!menuFlag){
        menuFlag=1;
        menuContainer.style.display="block";
        content.style.width="80vw";
        menuB.style.transform="translateX(-20vw)";
        menuContainer.style.transform="translateX(-20vw)";
    }
    else{
        menuFlag=0;
        content.style.width="100vw";
        menuB.style.transform="translateX(0vw )";
        menuContainer.style.transform="translateX(0vw)";
        menuContainer.style.display="none";
    }
}
pcBoot()
function pcBoot(){
    const powerB=document.createElement("button");
    powerB.innerHTML="P";
    powerB.style.width="40vmin";
    powerB.style.height="40vmin";
    powerB.style.borderRadius="30%";
    powerB.style.fontSize="20vmin";
    powerB.style.fontWeight="100";
    powerB.style.color="rgba(255,150,220,.8)";
    powerB.style.border="20px solid rgba(0,255,200,.5)";
    powerB.style.margin="5px";
    const resetB=document.createElement("button");
    resetB.innerHTML="R";
    resetB.style.width="20vmin";
    resetB.style.height="20vmin";
    resetB.style.borderRadius="50%";
    resetB.style.fontSize="10vmin";
    resetB.style.fontWeight="100";
    resetB.style.color="rgba(190,180,220,.8)";
    resetB.style.border="20px solid rgba(0,255,200,.5)";
    resetB.style.margin="5px";
    const sel=document.createElement("select");
    const sel1=document.createElement("option");
    const sel2=document.createElement("option");
    sel1.value="1";
    sel2.value="2";
    sel1.innerHTML="Windows";
    sel2.innerHTML="Linux";
    sel.appendChild(sel1);
    sel.appendChild(sel2);
    const grid=document.createElement("table");
    const tr1=document.createElement("tr");
    const tr2=document.createElement("tr");
    const tr3=document.createElement("tr");
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const td4=document.createElement("td");
    td1.appendChild(powerB);
    td2.appendChild(resetB);
    td3.appendChild(sel)
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    grid.appendChild(tr1);
    grid.appendChild(tr2);
    grid.appendChild(tr3);
    content.append(grid);
}