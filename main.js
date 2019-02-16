'use strict';

const main = () => {
    let players;
    let player1name;
    let player2name;

    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        return main;
    } 
    const buildSplashScreen = () => {
        const buildSplashScreen = buildDom(`
        <section class="splash-screen">
            <h1>¡Paint Room!</h1>
            <button>¡Go!</button>
        </section>
        `);

        const startButtom = document.querySelector('button');
        startButtom.addEventListener('click', buildSettingsScreen);
    };

    const buildSettingsScreen = () => {
        const buildSettingsScreen = buildDom(`
        <section class="splash-screen">
            <h1>¡Settings!</h1>
            <form action="reg.txt"> 
                <input type="text" id="player1name" placeholder="Player one">
                <input type="text" id="player2name" placeholder="Player two">
                <button id=button>Play</button>
            </form>
        </section>
        `);

        players = document.querySelectorAll('input');
        player1name = players[0].value;
        player2name = players[1].value;

        const startButtom = document.querySelector('#button');
        startButtom.addEventListener('click', buildGameScreen);
        
    };

    const buildGameScreen = () => {
        console.log(players[0].value);
        console.log(players[1].value);
        const buildGameScreen = buildDom(`
        <section class="body-gamescreen">
        <label id="countdown"></label>
        <section class="game-screen">
            <canvas></canvas>
        </section>
        `);

        const width = document.querySelector('.game-screen').offsetWidth;
        const height = document.querySelector('.game-screen').offsetHeight;

        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);

        

        setTimeout(buildGameOver, 62000);

        const game = new Game(canvasElement);
        game.gameOverCallback(buildGameOver);

        game.contador();

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

        const setPlayer2Direction = (event) => {
            if(event.code === 'KeyW'){
                game.moveplayer2('up');
            } else if(event.code === 'KeyS') {
                game.moveplayer2('down');
            } else if(event.code === 'KeyD') {
                game.moveplayer2('right');
            } else if(event.code === 'KeyA') {
                game.moveplayer2('left');
            }
        };

        document.addEventListener('keydown', setPlayerDirection);
        document.addEventListener('keydown', setPlayer2Direction);
        
    };

    const buildGameOver = () => {
        const buildGameOverScreen = buildDom(`
        <section class="game-over">
            <h1> Game over Screen</h1>
            <button id="button1">Restart</button>
            <button id="button2">Home</button>
        </section>
        `);

        const restartButton1 = document.querySelector('#button1');
        restartButton1.addEventListener('click', buildGameScreen);

        const restartButton2 = document.querySelector('#button2');
        restartButton2.addEventListener('click', buildSplashScreen);
    }

    buildSplashScreen();
};

window.addEventListener('load',main);

