/* jshint node: true */

class Container {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.listen = false;
    }

    setListen(listen) {
        this.listen = listen;
    }

    render() {
        noFill();
        stroke(255);
        rect(this.x, this.y, this.w, this.h);
    }
}