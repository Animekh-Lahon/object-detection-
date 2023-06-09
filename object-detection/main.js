img = "";
var status = "";
object = [];

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status:detecting object";
}

function modelLoaded(){
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    object = result;
}
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i = 0; i< object.length; i++){
            document.getElementById("status").innerHTML = "status:detected object"
            fill("#FF0000")
            percent = floor(object[i].confidence * 100)
            text(object[i].label+" "+percent+"%", object[i].x+15, object[i].y+15);
    noFill();
    stroke("#FF0000");
    rect(object[i].x, object[i].y, object[i].width, object[i].height );
        }
    }
}
    
