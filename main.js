object_detector = "";
img = "";
objects = [];
status = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
    console.log("Modelo cargado");
    status = true;
    object_detector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(var i = 0; objects.length; i++){
            document.getElementById("status").innerHTML = "Status:Objeto detectado";
            fill(255,0,0);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label +" "+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke(0,0,255);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    } 
}