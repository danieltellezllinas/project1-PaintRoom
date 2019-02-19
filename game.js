"use strict";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.player2;
    this.isGameOver = false;
    this.map;
    this.puntostotal1;
    this.puntostotal2;
    this.counter1;
    this.counter2;
  }

  puntuacion() {
    this.counter1 = 0;
    this.counter2 = 0;
    this.map.grid.forEach((element) => {
      element.forEach((num) => {
        if (num === 1) {
          this.counter1++;
        } else if (num === 2) {
          this.counter2++;
        }
      });
    });
    this.puntostotal1 = this.counter1 * 10;
    this.puntostotal2 = this.counter2 * 10;

    document.getElementById('puntosplayer1').innerText = this.puntostotal1;
    document.getElementById('puntosplayer2').innerText = this.puntostotal2;
   
  }

  contador() {
    var seconds = 60;
    function secondPassed() {
      var minutes = Math.round((seconds - 30) / 60);
      var remainingSeconds = seconds % 60;
      if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
      }
      document.getElementById("countdown").innerText =
        minutes + ":" + remainingSeconds;
      if (seconds == 0) {
        clearInterval(countdownTimer);
      } else {
        seconds--;
      }
    }

    var countdownTimer = setInterval(secondPassed, 1000);
  }

  startLoop() {
    this.player = new Player(this.canvas, 40, 0, 0, 0, 0);
    this.player2 = new Player(this.canvas, 40, 39, 19, 0, 0);
    this.map = new Map(this.player, this.player2, this.canvas);

    setTimeout(() => {
      this.isGameOver = true;
    }, 62000);

    const loop = () => {
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      this.puntuacion();

      if(!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }else{
        this.gameOverCallback(this.puntostotal1,this.puntostotal2)   
      }
    };
    if(!this.isGameOver) {
    window.requestAnimationFrame(loop);
    }
  }

  updateCanvas() {
    this.player.update();
    this.player2.update();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCanvas() {
    this.map.draw();
  }

  onOver(callback) {
    this.gameOverCallback = callback;
  }

  gameOver() {
    this.isGameOver = true;
    this.gameOverCallback();
  }

  moveplayer2(direction) {
    this.map.grid[this.player.y][this.player.x] = 1;
    if (direction === "up") {
      if (this.player.y > 0) {
        this.player.y--;
      };
    } else if (direction === "left") {
      if (this.player.x > 0) {
        this.player.x--;
      };
    } else if (direction === "right") {
      if (this.player.x < this.map.grid[0].length - 1) {
        this.player.x++;
      };
    } else if (direction === "down") {
      if (this.player.y < this.map.grid.length - 1) {
        this.player.y++;
      };
    }
    this.map.grid[this.player.y][this.player.x] = 10;
    console.log(this.map.grid);
  }

  moveplayer(direction) {
    this.map.grid[this.player2.y][this.player2.x] = 2;
    if (direction === "up") {
      if (this.player2.y > 0) {
        this.player2.y--;
      };
    } else if (direction === "left") {
      if (this.player2.x > 0) {
        this.player2.x--;
      };
    } else if (direction === "right") {
      if (this.player2.x < this.map.grid[0].length - 1) {
        this.player2.x++;
      };
    } else if (direction === "down") {
      if (this.player2.y < this.map.grid.length - 1) {
        this.player2.y++;
      };
    }
    this.map.grid[this.player2.y][this.player2.x] = 20;
    console.log(this.map.grid);
  }
}
