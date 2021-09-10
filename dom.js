document.getElementById("new combination").onclick = () => {
    color1 = new Color();
    color2 = color1.similar(50);
    return true;
}

document.getElementById("add color").onclick = () => {
    colors.push(colors[colors.length - 1].similar())
}

document.getElementById("subtract color").onclick = () => colors.shift();