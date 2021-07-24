noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/3xvxgsMZ/45-453924-drawing-clowns-nose-zoya-kylie2-clipart-removebg-preview.png");
}

function setup() 
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}
 
function take_click()
{
    save('MyClownSelfie.png');
}

function modelLoaded()
{
    console.log("PoseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 190;
        noseY = results[0].pose.nose.y - 120;

        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}