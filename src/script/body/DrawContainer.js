'use strict';

class DrawContainer extends Container {
    render() {
        noFill();
        stroke(255, 0, 255);
        rect(this.x, this.y, this.w, this.h);
    }
}