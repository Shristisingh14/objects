img = "";
objects = [];
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();
    Object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting the Object";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    Object_detector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);

    objects = results;
}

function draw() {
    image(img, 0, 0, 650, 450);
    
    if(status != "")
    {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object detected";
             fill("#A020F0");
             percent = floor(objects[i].confidence * 100);
             text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y- 5);
             noFill();
             stroke("#A020F0");
             rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}