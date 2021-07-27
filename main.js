NoseX=0;
NoseY=0;


function preload(){
clown_nose=loadImage("https://i.postimg.cc/MGHCfp0m/MOOstache.png");
}
 
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
 video.size(300, 300);
 video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposes);
}

function modelLoaded(){
    console.log("poseNetis anitialized")
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,NoseX,NoseY,30,30);
}

function take_snapshot(){
    save("filterimg.png");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    NoseX=results[0].pose.nose.x-15;
    NoseY=results[0].pose.nose.y-15;
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
}
}