let backgroundColor = [0, 0, 0];
let color1 = [0, 0, 0];
let color2 = [0, 0, 0];

function setup() {
  createCanvas(400, 400);
  frameRate(0.5)
}

function draw() {
  background(200);

  fill(color1)
  rect(0, 0, 200, 400) //color 1
  fill(color2)
  rect(200, 0, 400, 400) //color2

  color1 = randomColor()
  color2 = contrastColor(color1)
}

let randomColor = () => {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

let contrastColor = (c) => {
  r = 255 - c[0];
  g = 255 - c[1];
  b = 255 - c[2];
  return [r, g, b];
}

let nextColor = c => {
  switch (Math.floor(Math.random(2))) {
    case 0:
      //contrast color
    case 1:
      //similar color
  }
}