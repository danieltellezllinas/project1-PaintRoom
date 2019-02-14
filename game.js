'use strict';

class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.isGameOver = false;

    };

    startLoop(){

        this.player = new Player(this.canvas,3);

        const loop = () => {
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            console.log('loop');
        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
}

    updateCanvas(){
        this.player.update();
    };

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    };

    drawCanvas(){
        this.player.draw();
    };

    gameOverCallback(callback){
        this.onGameOver = callback;
    };


};