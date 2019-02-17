'use strict';

const main = () => {
    let players;

    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        return main;
    } 
    const buildSplashScreen = () => {
        const buildSplashScreen = buildDom(`
        <section class="splash-screen">
            <div class="splash-screen-center">
            <div class="borde">
                <h1 class="grow">¡Paint Room!</h1>
                <p class="titulo-splash">¡Bienvenid@! ¿Estás segur@ que podrás conseguir más puntos que tu oponente?</p>
            <div class="flexbox-container">
                <div>
                    <h3 class="swing">¡Entra al juego!</h3>
                    <p>¡Presiona el botón y que comience la diversión!</p>
                    <button class="boton">¡Start!</button>
                </div>
                <div>
                    <h3 class="swing">Instrucciones</h3>
                    <p>¿No sabes como jugar? ¡Aquí tendrás toda la información!</p>
                    <button class="boton">¡Here!</button>
                </div>
            </div>
            </div>
            </div>
        </section>
        `);

        const startButtom = document.querySelector('button');
        startButtom.addEventListener('click', buildSettingsScreen);
    };

    let player1name, player2name;

    const buildSettingsScreen = () => {
        const buildSettingsScreen = buildDom(`
        <section>
            <h1>¡Settings!</h1>
            
                <input type="text" id="player1name" placeholder="Player one">
                <input type="text" id="player2name" placeholder="Player two">
                <button id=button>Play</button>
            
        </section>
        `);

        players = document.querySelectorAll('input');
        const startButtom = document.querySelector('#button');
        startButtom.addEventListener('click', buildGameScreen);
       
    };

    const buildGameScreen = () => {
        console.log(player1name)
        console.log(player2name)

        player1name = players[0].value;
        player2name = players[1].value;

        const buildGameScreen = buildDom(`
        <section class="body-gamescreen">
        <div id="countdown"></div>
        <div class="contadorplayer1">
            <div id="nameplayer1"></div>
            <div id="puntosplayer1" class="pointsplayers"></div>
        </div>
        <div class="contadorplayer2">
            <div id="nameplayer2"></div>
            <div id="puntosplayer2" class="pointsplayers2"></div>
        </div>
        <section class="game-screen">
        <canvas></canvas>
        </section>
        `);

        document.getElementById('nameplayer1').innerText = player1name;
        document.getElementById('nameplayer2').innerText = player2name;

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

        game.puntuacion();

        var keys = {};

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

