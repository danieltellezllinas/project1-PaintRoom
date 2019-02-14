'use strict';

class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.isGameOver = false;
        this.map;

    };

    startLoop(){
        
        this.player = new Player(this.canvas,3);
        this.map = new Map(this.player);
        console.log(this.map.grid);

        const loop = () => {
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
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
        this.map.draw();
    };

    gameOverCallback(callback){
        this.onGameOver = callback;
    };

    moveplayer(direction){
        this.map.grid[this.player.y][this.player.x] = 0;
        if(direction === 'up'){
            this.player.y --;
        } else if(direction === 'left'){
            this.player.x --;
        } else if(direction === 'right'){
            this.player.x ++;
        }else if(direction === 'down'){
            this.player.y ++;
        };
        this.map.grid[this.player.y][this.player.x] = 10;
        console.log(this.map.grid)
    };   
};