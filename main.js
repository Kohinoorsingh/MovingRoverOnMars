canvas=document.getElementById("finallymyCanvas");
ctx=canvas.getContext("2d");
 var rover_width=100;
 var rover_height=90;
 var rover_X=10;
 var rover_Y=10;
 var mars="mars.jpg";
 var wierd_walking_machince="rover.png";
 function add(){
     background_imgTag=new Image();
     background_imgTag.onload=uploadBackground;
     background_imgTag.src=mars;

     rover_imgTag=new Image();
     rover_imgTag.onload=uploadrover;
     rover_imgTag.src=wierd_walking_machince;
 }
 function uploadBackground(){
     ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
 }
 function uploadrover(){
     ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_width,rover_height);
 }
 window.addEventListener("keydown",my_keydown);
 function my_keydown(e){
     keyPressed=e.keyCode;
     console.log(keyPressed);
     if (keyPressed=="38"){
     up();
     console.log("up");    
     }  

     if (keyPressed=="39"){
        right();
        console.log("right");    
        } 

        if (keyPressed=="37"){
            left();
            console.log("left");    
            } 

            if (keyPressed=="40"){
                down();
                console.log("down");    
                }  
 }
 function up(){
if (rover_Y>=0){
    rover_Y=rover_Y-10;
console.log("when up arrow is pressed X= "+rover_X+" and= "+rover_Y);
uploadBackground();
uploadrover();

}
 }

 function down(){
    if (rover_Y<=500){
        rover_Y=rover_Y+10;
    console.log("when down arrow is pressed X= "+rover_X+" and= "+rover_Y);
    uploadBackground();
    uploadrover();
     
    }
     }

     function right(){
        if (rover_X<=700){
            rover_X=rover_X+10;
        console.log("when right arrow is pressed X= "+rover_X+" and= "+rover_Y);
        uploadBackground();
        uploadrover();
         
        }
         }

         function left(){
            if (rover_X>=0){
                rover_X=rover_X-10
            console.log("when left arrow is pressed X= "+rover_X+" and= "+rover_Y);
            uploadBackground();
            uploadrover();
             
            }
             }