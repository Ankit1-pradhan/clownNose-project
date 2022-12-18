function preload(){

}

function setup(){
   canvas= createCanvas(300,300);
   canvas.center();
   video= createCapture(VIDEO);
   video.size(300,300);
   video.hide();
}

function draw(){
    image(video,0,0,300,300);
    fill("#1affff");
    stroke("black");
    circle(18,285,20);
    circle(285,15,20);
    circle(285,285,20);
    circle(18,15,20);
    fill("#1affff");
    stroke("black");
    rect(10,23,20,250);
    rect(275,23,20,250);
    rect(25,10,250,15);
    rect(25,275,250,15);
}