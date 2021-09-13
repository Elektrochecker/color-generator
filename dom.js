let addColor = (i) => {
    let rng = Math.floor(Math.random() * 5);
    
    if (rng === 0) {
        colors[i + 1] = colors[i].similar().contrast()
    } else {
        colors[i + 1] = colors[i].similar()
    }
    return true;
}

document.getElementById("new combination").onclick = () => {
    colors[0] = new Color();
    let l = colors.length - 1;
    for (let i = 0; i < l; i++) {
        addColor(i)
    }
}

document.getElementById("add color").onclick = () => addColor(colors.length-1);

document.getElementById("subtract color").onclick = () => {
    if (colors.length != 1) {
        return colors.shift();
    } else {
        return false;
    }
}

document.getElementById("fetch names").onclick = () => {
    colors.forEach(e => {
        getColorNameFromApi(e);
    })
}