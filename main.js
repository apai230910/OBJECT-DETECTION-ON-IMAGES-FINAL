
img = "";

object_status = "";

objects = [];

function preload() {

 img = loadImage("Bed_room.jpeg");

}

function setup() {

 canvas = createCanvas( 640 , 420 );

 canvas.center();

 objectDetector = ml5.objectDetector( "cocossd" , modalLoaded);

 document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modalLoaded() {

 console.log("Modal Loaded");

 object_status = true;

 objectDetector.detect( img , gotResult);

}

function gotResult( error, results) {

 if(error) {

  console.error(error)
  
 } else {

  console.log(results);

  objects = results;

 }

}

function draw() {

 image( img , 0 , 0 , 640 , 420 );

 if(object_status != "") {

  for( i = 0 ; i < objects.length ; i++) {

   document.getElementById("status").innerHTML = " Status : Objects Detected";

   fill("blue");

   percent = floor(objects[i].confidence * 100);

   text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y + 15);

   noFill();

   stroke("blue");

   rect( objects[i].x , objects[i].y , objects[i].width , objects[i].height);

   document.getElementById("number_of_objects").innerHTML = "Out of 2 objects " + objects.length + "are detected";
   
  }
  
 }
 
}

function bed_room() {

 window.location = "bedroom.html";

}

function tv_and_ac() {

 window.location = "tv_and_ac.html";

}

function desk() {

 window.location = "desk.html";

}

function bottles() {

 window.location = "bottles.html";

}

function fruit_basket() {

 window.location = "fruit_basket.html";

}

function exit() {

 window.location = "index.html";

}