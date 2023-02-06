const menuB= document.getElementById("menuB");
const configB= document.getElementById("configB");
const menuBgen= document.querySelectorAll("#menu>button");
const menuContainer= document.getElementById("menu_container");
const configComtainer=document.getElementById("config_container");
const Contgen= document.querySelectorAll(".menu_container");
const content=document.getElementById("content");
const mainP=document.getElementById("mainP");
var menuFlag=0;
var bootFlag=0;

function menuBpress(btn){
    if(!menuFlag){
        menuFlag=1;
        Contgen[btn].style.display="block";
        menuBgen.forEach(butn => {
            butn.style.width="30%";
            butn.style.transform="translateX(-30%)";
            mainP.style.gridTemplateColumns="60% 40%";
        });
    }
    else{
        menuFlag=0;
        menuBgen.forEach(butn => {
            butn.style.transform="translateX(0)";
            butn.style.width="100%";
            mainP.style.gridTemplateColumns="90% 10%";
        });
        Contgen[btn].style.display="none";
    }
}
class pcBootC{
    constructor(){
        content.innerHTML="";
        menuBpress(0);
        this.powerB=document.createElement("button");
        this.powerB.innerHTML="P";
        this.powerB.style.width="25vmin";
        this.powerB.style.height="25vmin";
        this.powerB.style.borderRadius="30%";
        this.powerB.style.fontSize="10vmin";
        this.powerB.style.fontWeight="600";
        this.powerB.style.color="rgba(255,150,220,.8)";
        this.powerB.style.border="2vmin solid rgba(0,255,200,.5)";
        this.powerB.style.marginRight="auto";
        this.powerB.style.marginLeft="auto";
        this.powerB.style.display="block";    
        this.powerB.style.marginTop="3vh";
        this.resetB=document.createElement("button");
        this.resetB.innerHTML="R";
        this.resetB.style.width="20vmin";
        this.resetB.style.height="20vmin";
        this.resetB.style.borderRadius="30%";
        this.resetB.style.fontSize="10vmin";
        this.resetB.style.fontWeight="600";
        this.resetB.style.color="rgba(255,150,220,.8)";
        this.resetB.style.border="2vmin solid rgba(0,255,200,.5)";
        this.resetB.style.marginRight="auto";
        this.resetB.style.marginLeft="auto";
        this.resetB.style.display="block";
        this.resetB.style.marginTop="3vh";
        this.stat=document.createElement("div");
        this.stat.classList="genericText";
        this.stat.innerHTML="_status_";
        this.stat.style.color="white"
        this.stat.style.textAlign="center";
        this.stat.style.fontSize="10vmin";
        this.stat.style.marginTop="3vh";
        this.selD=document.createElement("div");
        this.sel=document.createElement("select");
        this.sel1=document.createElement("option");
        this.sel2=document.createElement("option");
        this.sel1.innerHTML="Windows";
        this.sel2.innerHTML="Linux";
        this.sel.style.fontSize="10vmin";
        this.sel.style.width="auto";
        this.sel.style.margin="auto";
        this.sel.style.display="block";
        this.sel.style.textAlign="center";
        this.sel.style.borderRadius="10px";
        this.sel.style.cursor="pointer";
        this.sel.style.boxShadow="0px 3px 4px 0 rgb(255, 254, 254), 0 6px 30px 0 rgb(234, 226, 226)";
        this.selD.style.alignContent="center";
        this.selD.style.marginTop="3vh";
        this.sel.appendChild(this.sel1);
        this.sel.appendChild(this.sel2);
        this.selD.appendChild(this.sel);
        content.appendChild(this.powerB);
        content.appendChild(this.stat);
        content.appendChild(this.resetB);
        content.appendChild(this.selD);
    }
}
class keybC{
    constructor(){
        content.innerHTML="";
        menuBpress(0);
        this.keyboard=document.createElement("div");
        this.textA=document.createElement("textarea");
        this.keyboard.appendChild(this.textA);
        this.content.appendChild(this.keyboard);
        this.textA.focus();
        content.appendChild(this.keyboard);
    }
}