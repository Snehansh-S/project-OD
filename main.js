img="";
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded(){
    console.log("cocossd is initialized");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
    console.log(error);
}
console.log(results);
}
function preload(){
     
}
