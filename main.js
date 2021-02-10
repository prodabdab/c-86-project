var canvas = new fabric.Canvas('iwilldoit');

widht = 30;
height = 30;

player_x = 10;
player_y = 10;

var objectct ="";
 function player_move() {
     fabric.Image.fromURL("player.png", function (Img) {
        objectct=Img;
        objectct.scaleToWidth(140);
        objectct.scaleToHeight(150);
        objectct.set({top:player_y,left:player_x});
        canvas.add(objectct);
     });
 } 
 