var body = document.getElementsByTagName("body")[0];

body.style.background = "url('https://i.imgur.com/OBB7tLg.gif')";

body.innerHTML = "<center><img style='width:200px' id='bag1' src='http://quacklemtduck.github.io/itk/lowrez.png'><h1 id='textBag'>BAGUETTE! HONHONHON!</h1><img style='width:200px' id='bag2' src='http://quacklemtduck.github.io/itk/lowrez.png'> <a><h1 id='textBag2'></h1></a></center>";

//setTimeout(function () {
var song = document.createElement("AUDIO");
song.src="http://quacklemtduck.github.io/itk/song.mp3";

song.play();

if(song.paused){
    document.getElementById("textBag2").innerHTML = "Klik for en overraskelse :))))";
}
body.onclick = function(){
    
   song.play(); 
    
};


//}, 10000);




var rotate = 0;
setInterval(function(){
    document.getElementById("bag1").style.transform = "rotate(" + String(rotate) + "deg)";
    document.getElementById("bag2").style.transform = "rotate(" + String(rotate) + "deg)";
    document.getElementById("textBag").style.color = "white";
    rotate += 5;
    
    if(rotate >= 360){rotate-=360;}
    
    
},10);
    
    
    //


