// Canvas Game Engine

// Basic Game Elements

var i = 0;
var canvas;
var ctx;

var mouse = {};

window.onload = function(){
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
canvas.onmousemove = function(e){
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.x + Camera.x - rect.left;
	mouse.y = e.y + Camera.y - rect.top;
}
}

Math.radians = function(degrees){
	return degrees * Math.PI / 180;
}
Math.degrees = function(radians){
	return radians*180/Math.PI;
}

var game = new Object();
game.fps = 30;

// Constructors

function GameObject(x,y,sprite,displayWidth,displayHeight,imgSpeed,name){

	this.name = name;

	this.x = x;
	this.y = y;

	this.width = displayWidth;
	this.height = displayHeight;

	this.sprite = sprite;

	this.currentFrame = 0;

	this.currentUpdate = 0;

	this.animEndEvent = new Event('animend' + name);

	this.imgSpd = imgSpeed * game.fps;

	this.draw = function(){
		if(this.imgSpd != 0){
		this.currentUpdate += this.imgSpd / game.fps;
		/*if(this.currentUpdate  1){
			this.currentUpdate = 0;
		}*/
		if(this.currentUpdate >= 1){
			this.currentUpdate = 0;
			this.currentFrame++;

			if(this.currentFrame > this.sprite.aFrames - 1){
				this.currentFrame = 0;
				dispatchEvent(this.animEndEvent);
			}
		}
	}

		ctx.drawImage(this.sprite.img,this.sprite.frame[this.currentFrame][0],this.sprite.frame[this.currentFrame][1],this.sprite.imgWidth,this.sprite.imgHeight,this.x,this.y,this.width,this.height)
	}

	this.setImgSpd = function(newSpeed){
		this.imgSpd = newSpeed*game.fps;
	}

}



function Sprite(img,imgWidth,imgHeight,frames){

	this.img = new Image();
	this.img.src = img;

	this.imgWidth = imgWidth;
	this.imgHeight = imgHeight;

	this.aFrames = frames;


	this.frame = [];

	for(i = 0; i < this.aFrames;i++){
		this.frame[i] = [i * this.imgWidth,0];
	}

}


function camObj(){
	this.x = 0;
	this.y = 0;

	this.move = function(x,y){
		ctx.translate(this.x - x,this.y - y);
		this.x = x;
		this.y = y;
	}
}

var Camera = new camObj();


//key_codes
var vk_right = 39;
var vk_left = 37;
var vk_up = 38;
var vk_down = 40;
var vk_backspace = 8;
var vk_tab = 9;
var vk_enter = 13;
var vk_shift = 16;
var vk_ctrl = 17;
var vk_alt = 18;
var vk_delete = 46;
function ord(character){
	return character.charCodeAt(0);
}


function checkPointTouch(x,y,obj){
	if(x >= obj.x && x <= obj.x + obj.width){
		if(y >= obj.y && y <= obj.y + obj.height){
			return true
		}else{return false;}
	}else{return false;}
}


function drawTextOutlined(text,x,y,color,outlinecolor){
	ctx.fillStyle = outlinecolor;
	ctx.fillText(text,x+1,y);
	ctx.fillText(text,x-1,y);
	ctx.fillText(text,x,y+1);
	ctx.fillText(text,x,y-1);
	ctx.fillStyle = color;
	ctx.fillText(text,x,y);
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function getPixelColor(x,y){
	var pixelData = ctx.getImageData(x,y,x+1,y+1);
	return rgbToHex(pixelData.data[0],pixelData.data[1],pixelData.data[2]);
}
