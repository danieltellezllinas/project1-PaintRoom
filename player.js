'use strict';

class Player{
    constructor(canvas, lives){
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = 0
        this.y= 0
        this.directiony = 0;
        this.directionx = 0;
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