classifier = ml5.imageClassifier("MobileNet", modelloaded);
function setup() {
  canvas = createCanvas(277, 182);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(277, 182);
}
function draw(){
  image(video, 0, -110, 277, 282);
  classifier.classify(video, gotResult);
}
function modelloaded(){
  console.log("Model Loaded!");
}
function gotResult(error, results){
  if(error){
      console.error(error);
  }else{
      console.log(results);
      document.getElementById("object").innerHTML = results[0].label;
      document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}