'use strict';

const main = () => {

    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        return main;
    } 
    const buildSplashScreen = () => {
        const buildSplashScreen = buildDom(`
        <section class="splash-screen">
            <h1>¡Paint Room!</h1>
            <button>¡Start the game!</button>
        </section>
        `);

        const startButtom = document.querySelector('button');
        startButtom.addEventListener('click', buildGameScreen);
    };

    const buildGameScreen = () => {
        const buildGameScreen = buildDom(`
        <section class="game-screen">
            <canvas></canvas>
        </section>
        `);

        const width = document.querySelector('.game-screen').offsetWidth;
        const height = document.querySelector('.game-screen').offsetHeight;

        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);

        

        //setTimeout(buildGameOver, 3000);

        const game = new Game(canvasElement);
        game.gameOverCallback(buildGameOver);

        game.startLoop();

        const setPlayerDirection = (event) => {
            if(event.code === 'ArrowUp'){
                game.moveplayer('up');
            } else if(event.code === 'ArrowDown') {
                game.moveplayer('down');
            } else if(event.code === 'ArrowRight') {
                game.moveplayer('right');
            } else if(event.code === 'ArrowLeft') {
                game.moveplayer('left');
            }
        };

        document.addEventListener('keydown', setPlayerDirection);
        
    };

    const buildGameOver = () => {
        const buildGameOverScreen = buildDom(`
        <section class="game-over">
            <h1> Game over Screen</h1>
            <button>Restart</button>
        </section>
        `);

        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click', buildGameScreen);
    }

    buildSplashScreen();
};

window.addEventListener('load',main);