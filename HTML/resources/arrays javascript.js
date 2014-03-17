//Arrays

function keyrecorder(e) {
if(!e) { e=window.event; }
if (e.charCode==13) {getcaptain();}
}

function getcaptain() {
var captain=0;
captain=document.getElementById("captainnumber").value;
if (captain==0) {
 captain=0;
} else captain = parseInt(captain);
 var channel=document.getElementById("captainnumber");
 channel.value='';
 changecaptainpic(captain);
 captaintext(captain);
}

function changecaptainpic(captain) {
var captainnumber;
var captainnumber=captain;
if (captainnumber==0 || captainnumber==1 || captainnumber==2 || captainnumber==3 || captainnumber==4 || captainnumber==5) {
 var height=new Array();
 height[0]='214px';
 height[1]='227px';
 height[2]='264px';
 height[3]='306px';
 height[4]='272px';
 var picture=new Array();
 picture[0]='';
 picture[1]='resources/images/images/picard.png';
 picture[2]='resources/images/images/kirk.png';
 picture[3]='resources/images/images/columbus.png';
 picture[4]='resources/images/images/gama.png';
 picture[5]='resources/images/images/magellan.png';
//Changing height
 var channelheight;
 channelheight=document.getElementById("captainpicture");
 channelheight.style.height=height[captainnumber-1];
//Setting width
 var channelwidth;
 channelwidth=document.getElementById("captainpicture");
 channelwidth.style.width="220px";
//Changing picture
 document.captainpictureimage.src=picture[captainnumber];
//Setting border
 if (captainnumber<1 || captainnumber>5) {
  var channelborder;
  channelborder=document.getElementById("captainpicture");
  channelborder.style.borderStyle="none";
 }
 else {
  var channelborder;
  channelborder=document.getElementById("captainpicture");
  channelborder.style.borderStyle="solid";
  channelborder.style.borderWidth="2px";
  channelborder.style.borderColor="grey";
  }
 }
else {
 captaintextclear();
 }
}

function captaintext(captain) {
if (captain==0 || captain==1 || captain==2 || captain==3 || captain==4 || captain==5) {
 var captains0_5=new Array();
 captains0_5[0]="";
 captains0_5[1]='Captain Jean-Luc Picard is a Star Trek character portrayed by Patrick Stewart. He is captain of the USS Enterprice-D, and appears in the television series Star Trek: The Next Generation and the feature films Star Trek Generations, Star Trek: First Contact, Star Trek: Insurrection and Star Trek: Nemesis.';
 captains0_5[2]='James Tiberius Kirk is a fictional character played by William Shatner in the Star Trek franchise, appearing in numerous television episodes, films, books, comics, and video games. As the captain of the starship USS Enterprise, Kirk leads his crew as they explore "where no man has gone before".';
 captains0_5[3]='Christopher Columbus, born 1450 was an Italian explorer, navigator, and colonizer, born in the Republic of Genoa. Under the auspices of the Catholic Monarchs of Spain, he completed four voyages across the Atlantic Ocean that led to general European awareness of the American continents. Those voyages, and his efforts to establish permanent settlements on the island of Hispaniola, initiated the Spanish colonization of the New World.';
 captains0_5[4]='Vasco da Gama, 1st Count of Vidigueira, was a Portuguese explorer, one of the most successful in the Age of Discovery and the commander of the first ships to sail directly from Europe to India. He is one of the most famous and celebrated explorers from the Discovery Ages, being the first European to reach India by sea. This discovery was very significant and paved the way for the Portuguese to establish a long lasting colonial empire in Asia. ';
 captains0_5[5]="Ferdinand Magellan was a Portuguese explorer who became known for having organised the expedition that resulted in the first circumnavigation of the Earth completed by Juan Sebastián Elcano. Magellan's expeditions were also the first to sail from the Atlantic Ocean into the Pacific Ocean, and the first to cross the Pacific.";
 var channel;
 channel=document.getElementById("captaintextbox");
 channel.childNodes[0].nodeValue=captains0_5[captain];
 }
else {
 alert("Please enter a valid number");
 }
}

function captaintextclear() {
var channel;
var channel2;
channel=document.getElementById("captaintextbox");
channel2=document.getElementById("captainpicture");
channel.childNodes[0].nodeValue="";
channel2.style.borderStyle="none";
document.captainpictureimage.src="";
}

//Keyrecorder

document.onkeypress=keyrecorder;