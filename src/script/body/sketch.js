/* jshint node: true */

var blockSize;
var drawContainer;
var repeaters;

function setup() {
    createCanvas(windowWidth, windowHeight);

    blockSize = min(windowWidth, windowHeight)/4;

    repeaters = [];

    var x = 0;
    var y = 0;
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++) {
            var container = new Container(x, y, blockSize, blockSize);
            if(i==1 && j==1) {
                container.setListen(true);
            }
            repeaters.push(container);
            x += blockSize;
        }
        x = 0;
        y += blockSize;
    }
}

function draw() {
    translate(width/2-3*blockSize/2, height/2-3*blockSize/2);
    background(51);

    repeaters.forEach(function(item, index) {
        item.render();
    });

    drawContainer.render();
}