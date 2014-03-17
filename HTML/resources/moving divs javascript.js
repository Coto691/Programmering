//Global variables for Moving Divs

var posx=450;
var posy=350;
var coinx=10;
var coiny=10;
var score=0;

//Moving Divs

function keyrecorder(e) {
if(!e) { e=window.event; }
if (e.keyCode==119) {decreasey();}
if (e.keyCode==97) {decreasex();}
if (e.keyCode==115) {increasey();}
if (e.keyCode==100) {increasex();}
else {
if (e.charCode==119) {decreasey();}
if (e.charCode==97) {decreasex();}
if (e.charCode==115) {increasey();}
if (e.charCode==100) {increasex();}
}}

function updatexy() {
var channel;
channel=document.getElementById("positionsbox");
posy=posy-110
posx=posx-10
channel.childNodes[0].nodeValue='X='+posx+' '+'Y='+posy;
posy=posy+110
posx=posx+10
}

function increasex() {
posx=posx+10;
collision();
updatexy();
renderguy();
}

function increasey() {
posy=posy+10;
collision();
updatexy();
renderguy();
}

function decreasex() {
posx=posx-10;
collision();
updatexy();
renderguy();
}

function decreasey() {
posy=posy-10;
collision();
updatexy();
renderguy();
}

function resetxy() {
posx=450;
posy=350;
updatexy();
collision();
renderguy();
score=0;
updatescore();
var guyres;
var coinres;
guyres=document.getElementById("positionsbox")
coinres=document.getElementById("coinposbox")
guyres.childNodes[0].nodeValue='';
coinres.childNodes[0].nodeValue='';
document.coinpic.src="";
}

function renderguy() {
var channel;
channel=document.getElementById("Guybox");
channel.style.left=posx+'px';
channel.style.top=posy+'px';
collectcoin();
}

function collision() {
if (posy<120) {
 posy=110;
 }
if (posy>560) {
 posy=570;
 }
if (posx<20) {
 posx=10;
 }
if (posx>1070) {
 posx=1080;
 }
}

function rendermoney() {
coinxpos();
coinypos();
var channel;
channel=document.getElementById("coindiv");
var channel2;
channel2=document.getElementById("coinpic");
channel.style.left=coinx+'px';
channel.style.top=coiny+'px';
channel2.src="resources/images/objects/coin.png";
updatecoinxy();
}

function coinxpos() {
coinx=Math.random()*100;
coinx=Math.ceil(coinx);
if (coinx>94) {
 coinx=coinx-(coinx/2);
 coinx=Math.floor(coinx);
 }
coinx=coinx*10;
}

function coinypos() {
coiny=Math.random()*100;
coiny=Math.ceil(coiny);
if (coiny<8) {
 coiny=coiny+(coiny*coiny);
 }
if (coiny>63) {
 coiny=coiny-(coiny/2);
 coiny=Math.ceil(coiny);
 }
coiny=coiny*10;
}

function collectcoin() {
if (coinx == posx && coiny == posy) {
 score=score+1;
 rendermoney();
 updatescore();
 if (score>4) {
  alert("VICTORY!");
  updatescore();
  }
 }
if (coinx == posx && coiny == posy+10) {
 score=score+1;
 rendermoney();
 updatescore();
 if (score>4) {
  alert("VICTORY!");
  updatescore();
  }
 }
if (coinx == posx && coiny == posy+20) {
 score=score+1;
 rendermoney();
 updatescore();
 if (score>4) {
  alert("VICTORY!");
  updatescore();
  }
 }
}

function updatecoinxy() {
var channel;
channel=document.getElementById("coinposbox");
channel.childNodes[0].nodeValue='X=' + coinx+ ' ' +'Y='+ coiny;
}

function updatescore() {
var channel;
channel=document.getElementById("scorebox");
channel.childNodes[0].nodeValue='Score:'+' '+score;
}

//Keyrecorder

document.onkeypress=keyrecorder;