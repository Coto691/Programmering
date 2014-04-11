//Global variables for Moving Divs

var posx=450;
var posy=350;
var coinx=10;
var coiny=10;
var score=0;

//Onclick and Mouseover

function button1action() {
var channel;
channel=document.getElementById("buttontest");
alert("Button has been clicked");
}

function button2switch() {
var channel;
channel=document.getElementById("mouseovertest");
document.mouseovertest.src="resources/images/buttons/thenewbutton.png";
}

function button2switchback() {
var channel;
channel=document.getElementById("mouseovertest");
document.mouseovertest.src="resources/images/buttons/buttonmouseover.png";
}

//Text

function changefontlarger() {
var channel;
channel=document.getElementById('textboxboxtext');
channel.style.fontSize="20px";
}

function changefontsmaller() {
var channel;
channel=document.getElementById('textboxboxtext');
channel.style.fontSize="14px";
}

function changefontreset() {
var channel;
channel=document.getElementById('textboxboxtext');
channel.style.fontSize="16px";
}

//Number Generation

function generate0_49() {
number=Math.random()*100;
if (number>50) {
 number=number-50;
 }
number=Math.floor(number);
update_generate0_49(number);
}

function update_generate0_49(c) {
var channel;
channel=document.getElementById("out0_49");
channel.childNodes[0].nodeValue=number;
}

function generate1_10() {
number=Math.random()*10;
number=Math.ceil(number);
update_generate1_10(number);
}

function update_generate1_10(c) {
var channel;
channel=document.getElementById("out1_10");
channel.childNodes[0].nodeValue=number;
}














