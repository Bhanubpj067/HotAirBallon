var balloon, background;



function preload() {
  backgroundImg = loadImage("1.png")
  balloonImage = loadAnimation("2.png", "3.png", "4.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
   var balloonPosition=database.ref('balloon/height');
balloonPosition.on("value",readPosition , showError) 
   
   createCanvas(500,500);


balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;


}

function draw(){

    background(backgroundImg);
  
   if(keyDown(UP_ARROW)){
        balloon.addAnimation("balloonImage");
        balloon.scale=balloon.scale -0.01;   
        balloon.y=balloon.y-10;
    }        

    if(keyDown(DOWN_ARROW)){
             balloon.addAnimation("balloonImage");
             balloon.scale=balloon.scale +0.01;   
             balloon.y=balloon.y+10;
         }            

         if(keyDown(LEFT_ARROW)){
                 balloon.addAnimation("balloonImage");
                 balloon.x=balloon.x-10;
             }        

             if(keyDown(RIGHT_ARROW)){
                     balloon.addAnimation("balloonImage");  
                     balloon.x=balloon.x+10;
                 }    

    drawSprites();
}
   

   function readPosition(data){
height = data.val();
balloon.x = height.x;
balloon.y = height.y;
}
    function showError(){
        console.log("Error in writing to the database")
    }
    


