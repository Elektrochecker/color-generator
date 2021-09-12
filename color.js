class Color {
    constructor(r, g, b) {
        this.r = r || Math.floor(Math.random() * 255);
        this.g = g || Math.floor(Math.random() * 255);
        this.b = b || Math.floor(Math.random() * 255);

        getColorNameFromApi(this)
    }

    contrast = () => {
        let r = 255 - this.r;
        let g = 255 - this.g;
        let b = 255 - this.b;
        return new Color(r, g, b);
    }

    similar = (range = 50) => {
        let r,g,b;

        r = this.r + Math.floor(Math.random() * range * 2) - range;
        g = this.g + Math.floor(Math.random() * range * 2) - range;
        b = this.b + Math.floor(Math.random() * range * 2) - range;

        if(r > 255) {r = 255}
        if(r < 0) {r = 0}
        if(g > 255) {g = 255}
        if(g < 0) {g = 0}
        if(b > 255) {b = 255}
        if(b < 0) {b = 0}
        
        return new Color(r, g, b);
    }

    out = () => [this.r, this.g, this.b];
}