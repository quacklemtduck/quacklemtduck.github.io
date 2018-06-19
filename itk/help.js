var body = document.getElementsByTagName("body")[0];

body.style.background = "url('https://i.imgur.com/OBB7tLg.gif')";

body.innerHTML = "<center><img style='width:200px' id='bag1' src='lowrez.png'><h1 id='textBag'>BAGUETTE! HONHONHON!</h1><img style='width:200px' id='bag2' src='lowrez.png'> <a><h1>Klik for en overraskelse :)))</h1></a></center>";

//setTimeout(function () {
var song = document.createElement("AUDIO");
song.src="song.mp3";

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
    
    
    


