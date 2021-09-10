let backgroundColor = [0, 0, 0];
let color1 = new Color();
let color2 = color1.similar(50);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  fill(color1.out())
  rect(0, 0, 200, 400) //color 1
  fill(color2.out())
  rect(200, 0, 400, 400) //color2
}