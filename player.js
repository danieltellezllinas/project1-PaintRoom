'use strict';

class Player{
    constructor(canvas, lives){
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = 10 + this.size / 2;
        this.y= this.canvas.height/2;
        this.direction = 0;
    };

    update(){
        this.y = this.y + this.direction;
    };

    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size);
    };

    setDirection(direction){
        this.direction = direction;
    };

    checkScreen(){
        if (this.y - this.size/2 <= 0) {
            this.direction = 1;
        } else if(this.y + this.size/2 >= this.canvas.height){
            this.direction= -1;
        };
    };
};