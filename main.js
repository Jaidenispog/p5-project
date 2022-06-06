function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100,80,300,250);

  
    
    circle(40,45,50);
    circle(450,45,50);
    circle(40,360,50);
    circle(450,360,50);


    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(60, 27, 375, 25);
    rect(60, 347, 375, 25);
    rect(25, 63, 25, 275);
    rect(450, 63, 25, 275);

   
}

function take_snapshot(){
    save("jaiden_p5_project.png");
}