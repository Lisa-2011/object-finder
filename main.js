modelStatus="";

function setup(){
    canvas=createCanvas(430,380);

    video= createCapture();
    video.size(430,380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("model_status").innerHTML="Status: Detecting Objects";

    object_input=document.getElementById("input_object").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    document.getElementById("model_status").innerHTML="True";
}

function draw(){
    image(video,0,0,480,380);
}