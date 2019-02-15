'use strict';

class Player{
    constructor(canvas, size, x, y, directiony, directionx){
        this.size = size;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y= y;
        this.directiony = directiony;
        this.directionx = directionx;
    };

    update(){
    };

    draw() {
    };

    setDirectiony(directiony){
        this.directiony = directiony;
    };

    setDirectionx(directionx){
        this.directionx = directionx;
    };

    checkScreen(){
        if (this.y - this.size/2 <= 0) {
            this.directiony = -1;
        } else if(this.y + this.size/2 >= this.canvas.height){
            this.directiony= +1;
        }
    };
};