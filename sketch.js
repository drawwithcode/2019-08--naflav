function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('#9F7CE4');

  //question definition
  var myText = "Did I forget my drawing tablet back in Brazil?";
  textFont("Fondamento");
  textSize(60);
  fill('#333');
  textAlign(CENTER);
  text(myText, width / 2, height / 2);

  //answer definition
  var myText = "click anywhere to remember";
  textFont("Source Code Pro");
  textSize(16);
  fill('#333');
  textAlign(CENTER);
  text(myText, width / 2, height / 2 + 60);

}

function draw() {
  // put drawing code here

}


function mouseClicked() {
  window.open('index2.html', '_self');
}

//this is to redirect to another page
//function mouseClicked () {
//  window.open('https://www.wikihow.com/Make-a-Chair', '_self')
//}
