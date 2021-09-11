document.getElementById("new combination").onclick = () => {
    color1 = new Color();
    color2 = color1.similar(50);
    return true;
}

document.getElementById("add color").onclick = () => {
    let rng = Math.floor(Math.random()*5);
    if(rng === 0) {
        colors.push(colors[colors.length - 1].similar().contrast())
    } else {
        colors.push(colors[colors.length - 1].similar())
    }
}

document.getElementById("subtract color").onclick = () => {
    if (colors.length != 1) {
        return colors.shift();
    } else {
        return false;
    }
}