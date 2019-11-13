const mappa = new Mappa('MapboxGL', "pk.eyJ1IjoiZ2lvdmFubmljb3ZyZSIsImEiOiJjazJ2MWpobHYwMGR4M2JucWxvMmYybnBhIn0.YBqPhOlRb-R9TlQYdkEmqQ");
var zoomLevel = 5.5;
let customMap;
let userPosition;
let canvas;

var latVenezia = 45.4204289;
var lonVenezia = 12.2457407;

const options = {
  lat: 0,
  lng: 0,
  zoom: zoomLevel,
  studio: true,
  style: "mapbox://styles/giovannicovre/ck2vumqtf12ka1cs3nhq65i96"
}

// PRELOAD
function preload() {
  userPosition = getCurrentPosition();
  img = loadImage('assets/spritz_select.png');
}

// SETUP
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  options.lat = userPosition.latitude;
  options.lng = userPosition.longitude;

  customMap = mappa.tileMap(options);
  customMap.overlay(canvas);
}

// DRAW
function draw() {
  clear();

  var spritzHistory = 'The origin of the spritz is traced back to the custom of the Austrian Empire troops stationed in Veneto to lengthen the local wines with seltz or sparkling water. Hence the origin of the name, which is intended to derive from the German verb “spritzen”, which means "to spray", that is to make the gesture of lengthening the wine with sparkling water. This custom soon spread among the local population and has remained almost unchanged even in Friuli Venezia Giulia and Trentino. As a cocktail the spritz is supposedly born between the twenties and thirties of the twentieth century in Venice, when it was thought to combine the wine and the sparkling water with the Select, produced by the Venetian brothers Pilla.'

  var spritzSelect = calcGeoDistance(userPosition.latitude, userPosition.longitude, latVenezia, lonVenezia, "km");

  var markerUser = customMap.latLngToPixel(userPosition.latitude, userPosition.longitude);
  var markerSpritz = customMap.latLngToPixel(latVenezia, lonVenezia);

  //Line
  strokeWeight(4);
  stroke(255,255,255);
  line(markerUser.x, markerUser.y, markerSpritz.x, markerSpritz.y);

  //Marker User
  strokeWeight(4);
  fill(25,25,240);
  ellipse(markerUser.x, markerUser.y, 12);

  //Marker Spritz
  ellipse(markerSpritz.x, markerSpritz.y, 12);
  noStroke();
  img.resize(40, 0);
  image(img, markerSpritz.x-img.width/2, markerSpritz.y-img.height/2.5);

  //Markers Text
  textFont("Work Sans");
  textSize(24);
  text("YOU", markerUser.x-25, markerUser.y-15);
  text("SPRITZ-LAND", markerSpritz.x-80, markerSpritz.y-40);

  //Distance
  textSize(36);
  textAlign(RIGHT);
  text("There are " + Math.round(spritzSelect) + " km between you and Spritz-Land", windowWidth-48, windowHeight-48);

  textAlign(LEFT);

  //Box
  noStroke();
  fill("rgba(160,25,25,0.75)");
  rect(30,30,385,windowHeight-60,16);

  //Border
  strokeWeight(1);
  stroke(255,255,255);
  noFill();
  rect(42,42,361,windowHeight-84,8);

  //Title
  noStroke();
  fill("rgba(255,180,60,0.95)");
  textFont("Big Shoulders Text");
  textSize(30);
  text("Spritz History", 65, 100);

  //Text
  fill("rgba(255,255,255,0.95)");
  textFont("Alegreya");
  textSize(16);
  textLeading(21);
  text(spritzHistory, 65, 125, 320, windowHeight-130);
}
