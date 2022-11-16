img = "";
objects = [];
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 650, 450);
    fill("#51087E");
    noFill();
    stroke("#51087E");
    rect(50, 60, 350, 500 );
}