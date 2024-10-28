//GitHub Copilot assisted in writing this code.

var elevator;
var ellipses = [];
let InterstateBCFont;
let Godzilla;
let Godzilla_Code;

function preload(){
  elevator = loadImage("data/Elevator.jpeg");
  InterstateBCFont = loadFont("Interstate_BoldCondensed.ttf");
  Godzilla = loadImage("data/Godzilla.png");
  Godzilla_Code = loadImage("data/Godzilla_Code.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipses = [
    { x: width / 1.1321, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-CW/" },
    { x: width / 1.1321, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-1/" },
    { x: width / 1.1321, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-3/" },
    { x: width / 1.1321, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-5/" },
    { x: width / 1.1321, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-7/" },
    { x: width / 1.1321, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-9/" },
    { x: width / 1.1321, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-11/" },

    { x: width / 1.0925, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-0/" },
    { x: width / 1.0925, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-2/" },
    { x: width / 1.0925, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-4/" },
    { x: width / 1.0925, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-6/" },
    { x: width / 1.0925, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-8/" },
    { x: width / 1.0925, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-10/" },
    { x: width / 1.0925, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-12/" },
  ];
}

function draw() {
  background("white");
  image(elevator, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(Godzilla_Code, width / 2.8, height / 1.5, width / 5, height / 3.5);

  image(Godzilla, width / 1.65, height / 1.5, width / 4, height / 4);

  imageMode(CORNER);

  strokeWeight(width / 550);
  noFill();

  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    if (i === 2) {
      stroke(0, 255, 0);
    } else if (i === 1) {
      stroke(255, 0, 0);
    } else {
      stroke(255, 0, 0);
    }
    ellipse(e.x, e.y, e.w, e.h);
  }

  textAlign(CENTER, CENTER);
  textSize(windowWidth / 50);
  textFont(InterstateBCFont); 
  noStroke();
  fill(0);
  text(
    "Codewords Creative Coding and Typography",
    width / 2.5,
    height / 10,
    width / 5, // Specify the width for wrapping the text
    height / 12,  // Specify the height for wrapping the text
  );

  // Display text in the middle of the screen
  textAlign(CENTER, CENTER);
  textSize(windowWidth / 115);
  textFont(InterstateBCFont); 
  noStroke();
  fill(0); 
  text(
    "Unfortunately I was not able to attend week 3 but I did look at the modules and did the video tutorial. I used my code to draw Godzilla! I didn’t know at the time but we were tasked with creating a portrait of ourselves using p5, I only found out the next week. \n\n If you would like to play with the code, click on the code!",
    width / 3,
    height / 8,
    width / 3, // Specify the width for wrapping the text
    height / 4  // Specify the height for wrapping the text
  );
}

function mousePressed() {
  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    let d = dist(mouseX, mouseY, e.x, e.y);
    if (d < e.w / 2) {
      window.location.href = e.url;
    }
  }

  let Godzilla_CodeX = width / 2.8;  
  let Godzilla_CodeY = height / 1.5;  
  let Godzilla_CodeW = width / 5;  
  let Godzilla_CodeH = height / 3.5;  
  if (mouseX > Godzilla_CodeX - Godzilla_CodeW / 2 && mouseX < Godzilla_CodeX + Godzilla_CodeW / 2 && mouseY > Godzilla_CodeY - Godzilla_CodeH / 2 && mouseY < Godzilla_CodeY + Godzilla_CodeH / 2) {  
   window.location.href = "https://tnhowler.github.io/Week-3-Drawing-Dots/";
  }  
}
