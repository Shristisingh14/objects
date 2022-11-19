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
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 650, 450);
    fill("#51087E");
    text("Dog", 50, 55);
    noFill();
    stroke("#51087E");
    rect(50, 60, 350, 380 );

    fill("#51087E");
    text("Cat", 280, 80);
    noFill();
    stroke("#51087E");
    rect(270, 85, 350, 350 );
}