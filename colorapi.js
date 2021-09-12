async function getColorName(color) {
    return await fetch("http://www.thecolorapi.com/id?hex=" + convertColorToHexString(color), {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .then(result => {
            color.name = result.name.value;
        })
        .catch(err => {
            console.error(err);
        })
}