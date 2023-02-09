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
        this.powerB.onclick=this.powerBc;
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
        this.resetB.onclick=this.resetB;
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
        this.sel.value="1";
        this.sel2.value="2";
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
        this.updStat();
    }
    updStat(){}
    powerBc(){}
    resetBc(){}
}
class keyBC{
    constructor(){
        content.innerHTML="";
        this.key=[];
        this.keySpecial=[];
        this.keyComand=['ctrl','cmd','alt','&rarr;','&larr;','&uarr;','&darr;'];
        this.arrow=['ArrowRight','ArrowLeft','ArrowUp','ArrowDown'];
        this.keyComandId=['NULL','SOH','STX','ETX','EOT','ENQ','ACK','BELL','Backspace','Tab','LF','VT','FF','Enter','Shift','SI','DLE','DC1','DC2','DC3','DC4','NAK','SYN','ETB','CAN','EM','SUB','Escape','FS','GS','RS','US','32','Delete','CapsLock','Control','Meta','Alt'];
        this.keyUpFlg=0;
        for (let i = 0; i < 33; i++) {
            this.keySpecial.push('0x'+i.toString(16));            
        }
        this.keyboard=document.createElement("div");
        this.keyboard.style.padding="10px";
        this.keyboard.style.height="100%";
        this.keyboard.style.width="100%";
        this.keyboard.onkeydown= (e)=>{this.keyDownPhysic(this,e)};
        this.keyboard.onkeyup= (e)=>{this.keyUpPhysic(this,e)};
        menuBpress(0);
        for (let i = 0; i < 33; i++) {
            this.key.push(document.createElement("button"));
            this.key[i].innerHTML=this.keySpecial[i];
            this.key[i].style.width="5.88%"
        }
        for (let i = 33; i < 137; i++) {
            this.key.push(document.createElement("button"));
            this.key[i].style.width="10%";
            if(i<48){
                this.key[i].innerHTML=String.fromCharCode(i);
                this.key[i].style.width="6.66%"
            }
            else if(i<65 && i>57){
                this.key[i].innerHTML=String.fromCharCode(i);
                this.key[i].style.width="14.28%";
            }
            else if(i>64 && i<91){
                this.key[i].innerHTML=String.fromCharCode(i);
                this.key[i].style.width="14.28%";
            }
            else if(i>96&& i<123){
                this.key[i]=0;
                continue;
            }
            else if(i==127){
                this.key[i].innerHTML="DEL"
            }
            else if(i==128){
                this.key[i].innerHTML="CAPS";
                this.key[i].onclick=()=>{this.keyCaps(this.key)};
            }
            else if(i>128){
                this.key[i].innerHTML=this.keyComand[i-129];
                this.key[i].style.width="14.28%";
            }
            else{
                this.key[i].innerHTML=String.fromCharCode(i);
            }
        }
        for (let i = 0; i < this.key.length; i++) {
            if(i>96&& i<123){
                this.key[i]=0;
                continue;
            }
            this.key[i].classList="genericText";
            this.key[i].setAttribute('id','k'+String(i));
            this.key[i].style.color="#960096";
            if(i<33){
                this.key[i].setAttribute('id','k'+this.keyComandId[i]);
                this.key[i].style.color="green";            
            }
            this.key[i].style.height="6vh";
            this.key[i].style.border="0.5vmin solid rgba(0,100,100,.2)";
            this.key[i].style.borderRadius="1vmin";
            this.key[i].style.fontSize="2vw";
            this.keyboard.appendChild(this.key[i]);
        }
        for (let i = 127; i < 132; i++) {
            this.key[i].setAttribute('id','k'+this.keyComandId[i-127+33]); 
            this.key[i].style.color="green";           
        }
        for (let i = 132; i < 136; i++) {
            this.key[i].setAttribute('id','k'+this.arrow[i-132]);
            this.key[i].style.color="blue"; 
        }
        this.key[136].classList="genericText";
        this.key[136].setAttribute('id','k'+'Focus');
        this.key[136].innerHTML="Focus";
        this.key[136].onclick=()=>{this.keyboard.focus();};   
        content.appendChild(this.keyboard);
        this.keyCaps();
    }
    keyUpEvent(key,mode){
        console.log('u');
    }
    keyDownEvent(key,mode){
        console.log('d');
    }
    keyDownPhysic(me,e){
        e.preventDefault();
        if(e.key.length==1){
            document.getElementById('k'+String(e.key).charCodeAt(0)).style.border="0.5vmin solid red";
            me.keyDownEvent(e.key.charCodeAt(0),0);
        }
        else{
            document.getElementById('k'+e.key).style.border="0.5vmin solid red";
            me.keyDownEvent(e.key,1);
        }
    }
    keyUpPhysic(me,e){
        e.preventDefault();
        if(e.key.length==1){
            document.getElementById('k'+String(e.key).charCodeAt(0)).style.border="0.5vmin solid rgba(0,100,100,.2)";
            me.keyUpEvent(e.key.charCodeAt(0),0);
        }
        else{
            document.getElementById('k'+e.key).style.border="0.5vmin solid rgba(0,100,100,.2)";
            me.keyUpEvent(e.key,1);
        }
    }
    keyCaps(){
        if(!this.keyUpFlg){
            this.keyUpFlg=1;
            for(let i=0; i<26;i++){
                this.key[65+i].innerHTML=String.fromCharCode(i+97);
                this.key[65+i].setAttribute('id','k'+String(i+97));
            }
        }
        else{
            this.keyUpFlg=0;
            for(let i=0; i<26;i++){
                this.key[65+i].innerHTML=String.fromCharCode(i+65);
                this.key[65+i].setAttribute('id','k'+String(i+65));
            }
        }
    }
    keyHandler(event) {
      }
}

class mouseBC{
    constructor(){
        // menuBpress(0);
        content.innerHTML="";
        this.mouseArea=document.createElement("div");
        this.rclk=document.createElement("button");
        this.lclk=document.createElement("button");
        this.scroll=document.createElement("input");

        this.mouseArea.style.width="100%";
        this.mouseArea.style.height="55vh";
        this.mouseArea.style.margin="3vmin auto";
        this.mouseArea.style.boxShadow="0px 1px 2px 2px white";
        this.mouseArea.style.borderRadius="2vmin";
        this.mouseArea.style.cursor="cell";
        this.mouseArea.onmousemove=(e)=>{this.mouseM(e,0);this.mouseArea.style.border="2vmin solid red";};
        this.mouseArea.ontouchmove=(e)=>{this.mouseM(e,1);this.mouseArea.style.border="2vmin solid red";};
        this.mouseArea.onwheel=(e)=>{this.scrollCh(e,1);};
        this.mouseArea.ontouchend=()=>{this.mouseArea.style.border="";};
        this.mouseArea.onmouseleave=()=>{this.mouseArea.style.border="";};

        this.rclk.style.width="20%";
        this.lclk.style.width="20%";
        this.rclk.innerHTML="R";
        this.lclk.innerHTML="L";
        this.rclk.style.fontSize="4vh";
        this.lclk.style.fontSize="4vh";
        this.rclk.style.padding="3vmin";
        this.lclk.style.padding="3vmin";
        this.rclk.style.float="right";
        this.lclk.style.float="left";
        this.rclk.style.borderRadius="3vmin";
        this.lclk.style.borderRadius="3vmin";
        this.scroll.type="range";
        this.scroll.min="0";
        this.scroll.max="100";
        this.scroll.value="50";
        this.scroll.style.margin="4vmin auto";
        this.scroll.style.width="100%";
        this.scroll.style.borderRadius="5vmin";
        this.scroll.style.height="5vh";
        this.scroll.classList="ui";
        this.scroll.onchange=()=>{this.scrollCh(this.scroll.value,1);this.scroll.value="50"};
        content.appendChild(this.mouseArea);
        content.appendChild(this.scroll);
        content.appendChild(this.rclk);
        content.appendChild(this.lclk);
    }
    scrollCh(val,m){}
    rDwn(){}
    rUp(){}
    lDwn(){}
    lUp(){}
    mouseM(e,m){
        e.preventDefault();
        console.log(m);}
}
var c = new mouseBC();

