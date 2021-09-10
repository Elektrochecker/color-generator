class Color {
    constructor(r, g, b) {
        this.r = r || Math.floor(Math.random() * 255);
        this.g = g || Math.floor(Math.random() * 255);
        this.b = b || Math.floor(Math.random() * 255);
    }

    contrast = () => {
        let r = 255 - this.r;
        let g = 255 - this.g;
        let b = 255 - this.b;
        return new Color(r, g, b);
    }

    similar = range => {
        let r = this.r + Math.floor(Math.random() * range * 2) - range;
        let g = this.g + Math.floor(Math.random() * range * 2) - range;
        let b = this.b + Math.floor(Math.random() * range * 2) - range;
        return new Color(r,g,b);
    }

    out = () => [this.r, this.g, this.b];
}