let colors = []
let width = 400;
let height = 400;

function setup() {
  createCanvas(width, height);
  colors[0] = new Color;
}

function draw() {
  background(200);

  for (let i = 0; i < colors.length; i++) {
    let scl = width / colors.length;
    fill(colors[i].out())
    rect(i * scl, 0, i * scl + scl, height)
  }
}