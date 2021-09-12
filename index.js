let colors = []
let width = 400;
let height = 400;

function setup() {
  width = windowWidth -16
  let canvas = createCanvas(width, height);
  canvas.parent("canvas")
  colors[0] = new Color;
}

function draw() {
  background(200);
  noStroke();

  for (let i = 0; i < colors.length; i++) {
    let scl = width / colors.length;
    fill(colors[i].out())
    rect(i * scl, 0, i * scl + scl, height)
  }

  hoverUpdateOutput()
}

let hoverUpdateOutput = () => {
  let scl = width / colors.length;
  let x = Math.floor(mouseX / scl);

  if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY > height) {
    return false;
  } else {
    let c = colors[x]

    if(typeof(c.name) != "string") {
      getColorNameFromApi(c)
    }

    document.getElementById("hexColor").innerHTML = "#" + convertColorToHexString(c);
    document.getElementById("colorName").innerHTML = `${c.name}`;
    return true;
  }
}

let convertColorToHexString = c => {
  let r = decToHex(c.r);
  let g = decToHex(c.g);
  let b = decToHex(c.b);
  return `${r}${g}${b}`;
}

let decToHex = x => x.toString(16).toUpperCase();