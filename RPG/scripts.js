function Item(name,sprite,frame,onUse){
  this.name = name;
  this.sprite = sprite;
  this.frame = frame;
  //optional
  this.onUse = onUse;

  this.draw = function(x,y,drawWidth,drawHeight){
    ctx.drawImage(this.sprite.img,this.sprite.frame[this.frame][0],this.sprite.frame[this.frame][1],this.sprite.imgWidth,this.sprite.imgHeight,x,y,drawWidth,drawHeight);
  }
}

function empty(){}

var grid = [];
var i = 0;
for(i=0;i<16;i++){
  grid[i] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}
var gridWidth = 32;
var gridHeight = 32;

var playerRight = new Sprite("playerRight.png",32,32,1);
var playerDown = new Sprite("playerDown.png",32,32,1);
var playerLeft = new Sprite("playerLeft.png",32,32,1);
var playerUp = new Sprite("playerUp.png",32,32,1);
var player = new GameObject(0,0,playerRight,32,32,0,"Player");
player.gridX = 1;
player.gridY = 1;
player.direction = 0;

function useGrid(){

    if(player.direction == 0){
      if(grid[player.gridX+1][player.gridY]!=0){
        grid[player.gridX+1][player.gridY].onUse();
      }
    }else if(player.direction==1){
      if(grid[player.gridX][player.gridY+1]!=0){
        grid[player.gridX][player.gridY+1].onUse();
      }
    }else if(player.direction==2){
      if(grid[player.gridX-1][player.gridY]!=0){
        grid[player.gridX-1][player.gridY].onUse();
      }
    }else if(player.direction=3){
      if(grid[player.gridX][player.gridY-1]!=0){
        grid[player.gridX][player.gridY-1].onUse();
      }
    }
}

function checkGrid(){
    if(player.direction == 0){
      if(grid[player.gridX+1][player.gridY]!=0){
        return grid[player.gridX+1][player.gridY].name;
      }
    }else if(player.direction==1){
      if(grid[player.gridX][player.gridY+1]!=0){
        return grid[player.gridX][player.gridY+1].name;
      }
    }else if(player.direction==2){
      if(grid[player.gridX-1][player.gridY]!=0){
        return grid[player.gridX-1][player.gridY].name;
      }
    }else if(player.direction=3){
      if(grid[player.gridX][player.gridY-1]!=0){
        return grid[player.gridX][player.gridY-1].name;
      }
    }
}

var wallSprite = new Sprite("wall.png",32,32,1);
var Wall = new Item("wall",wallSprite,0,function(){
  alert("This is a wall");
});

grid[0][0] = Wall;
