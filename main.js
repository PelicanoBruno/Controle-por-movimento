noseX = 0
noseY = 0
difference = 0
rightWristX = 0
leftWristX = 0

function setup(){
canvas = createCanvas(550,550)
canvas.position(560,150)
video = createCapture(VIDEO)
video.size(550,500)
posenet = ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)
}
function draw(){
background("cyan")
fill('green')
stroke('yellow')
square(noseX,noseY,difference)
document.getElementById("square_side").innerHTML = "A Largura e a Altura Serão:" + difference + "px"
}
function modelLoaded(){
console.log("modelo carregado")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)
        noseX =  results[0].pose.nose.x
        noseY =  results[0].pose.nose.y
        console.log(leftWristX,rightWristX,noseX,noseY)
    }
}