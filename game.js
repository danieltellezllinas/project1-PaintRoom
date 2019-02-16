'use strict';

class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.player2;
        this.isGameOver = false;
        this.map;
    };

    contador(){
        var seconds = 29;
        function secondPassed() {

        var minutes = Math.round((seconds - 30)/60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) { 
            remainingSeconds = "0" + remainingSeconds; 
        } 
        document.getElementById('countdown').innerHTML = minutes + ":" +     remainingSeconds; 
        if (seconds == 0) { 
            clearInterval(countdownTimer); 
        } else { 
            seconds--; 
        } 
        } 

        var countdownTimer = setInterval(secondPassed, 1000);
    };

    startLoop(){
        
        this.player = new Player(this.canvas, 40, 0, 0, 0, 0);
        this.player2 = new Player(this.canvas, 40, 39, 19, 0, 0);
        this.map = new Map(this.player, this.player2, this.canvas);

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
        this.player2.update();
    };

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    };

    drawCanvas(){
        this.map.draw();
    };

    gameOverCallback(callback){
        this.onGameOver = callback;
    };

    moveplayer2(direction){
        this.map.grid[this.player.y][this.player.x] = 1;
        if(direction === 'up'){
            if(this.player.y > 0){
            this.player.y --;
            };
        } else if(direction === 'left'){
            if(this.player.x > 0){
            this.player.x --;
            };
        } else if(direction === 'right'){
            if(this.player.x < this.map.grid[0].length-1){
            this.player.x ++;
            };
        }else if(direction === 'down'){
            if(this.player.y < this.map.grid.length-1){
            this.player.y ++;
            };
        };
        this.map.grid[this.player.y][this.player.x] = 10;
        console.log(this.map.grid)
    };  

    moveplayer(direction){
        this.map.grid[this.player2.y][this.player2.x] = 2;
        if(direction === 'up'){
            if(this.player2.y > 0){
            this.player2.y --;
            };
        } else if(direction === 'left'){
            if(this.player2.x > 0){
            this.player2.x --;
            };
        } else if(direction === 'right'){
            if(this.player2.x < this.map.grid[0].length-1){
            this.player2.x ++;
            };
        }else if(direction === 'down'){
            if(this.player2.y < this.map.grid.length-1){
            this.player2.y ++;
            };
        };
        this.map.grid[this.player2.y][this.player2.x] = 20;
        console.log(this.map.grid)
    };

    

};