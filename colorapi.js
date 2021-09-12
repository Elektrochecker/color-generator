async function getColorNameFromApi(color) {
    return await fetch("https://www.thecolorapi.com/id?hex=" + convertColorToHexString(color), {
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