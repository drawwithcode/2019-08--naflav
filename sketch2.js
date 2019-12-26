let myImage;
var myMap;
var canvas;
var key = "pk.eyJ1IjoiYW5mbCIsImEiOiJjazJuMXQzdGYwaW12M2JuenpiYjFha2FjIn0.96lS6KE5xgkDatYk7N-XgA";
var mappa = new Mappa("MapboxGL", key);
var homeLat = -12.8752949;
var homeLon = -38.5716907;
var meLat = 45.5048151;
var meLon = 9.1629839;
var options = {
  lat: 0,
  lng: 0,
  zoom: 2,
  style: "mapbox://styles/mapbox/dark-v9"
}





function preload() {
  myImage = loadImage("tablet.png");
  myImage2 = loadImage("myself.png");
}



function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}



function draw() {
  // put drawing code here
  clear();

  var salvador = myMap.latLngToPixel(homeLat, homeLon);
  var me = myMap.latLngToPixel(meLat, meLon);

  //Line
  line(salvador.x, salvador.y, me.x, me.y);

  //tablet location
  ellipse(salvador.x, salvador.y, 5);
  image(myImage, salvador.x, salvador.y, myImage.width = 50, myImage.height = 50);

  //my location
  image(myImage2, me.x, me.y, myImage2.width = 50, myImage2.height = 50);
  ellipse(me.x, me.y, 5);
  stroke("#9F7CE4");
  strokeWeight(2);

  //title definitions
  push();
  var myText = "Yes...";
  textFont("Fondamento");
  textSize(60);
  fill('#9F7CE4');
  noStroke();
  textAlign(CENTER);
  text(myText, 200, 100);
  pop();

  //text definition
  push();
  var myText = ":(";
  textFont("Source Code Pro");
  textSize(20);
  fill('#9F7CE4');
  noStroke();
  textAlign(CENTER);
  text(myText, 200 - 40, 100 + 50);
  pop();


}
