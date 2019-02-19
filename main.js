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
                    <button id="button1" class="boton">¡Start!</button>
                </div>
                <div>
                    <h3 class="swing">Instrucciones</h3>
                    <p>¿No sabes como jugar? ¡Aquí tendrás toda la información!</p>
                    <button id="button2" class="boton">¡Here!</button>
                </div>
            </div>
            </div>
            </div>
        </section>
        `);

        const startButton1 = document.getElementById('button1');
        startButton1.addEventListener('click', buildSettingsScreen);

        const startButton2 = document.getElementById('button2');
        startButton2.addEventListener('click', buildInstructionsScreen);
    };

    const buildInstructionsScreen = () => {
        const buildInstructionsScreen = buildDom(`
        <section class="splash-screen">
            <div class="instructions-screen-center">
            <div class="borde">
                <h1 class="grow">Instrucciones</h1>
                <p class="titulo-instructions">· Deberás pasar por encima de las casillas de tu oponente para robarle los puntos.</p>
                <p class="titulo-instructions">· El ganador de la partida será el que consiga más puntos una vez finalizado el tiempo.</p>
                <div class="flexbox-containert">
                <div class="color-p">
                    <h3 class="swing">Player 1</h3>
                    <img src="Imagenes/mov-img1.png"/>
                </div>
                <div class="color-p">
                    <h3 class="swing">Player 2</h3>
                    <img src="Imagenes/mov-img2.png"/>
                </div>
            </div>
            </div>
            <div class="div-3-p"><p class="p-container">Los jugadores deberán jugar con las teclas mostradas en las imágenes.</p></div>
            <div class="espacio-botton"><button id="button2" class="boton-naranja">¡Start!</button></div>
            </div>
        </section>
        
        `);

        const startButton3 = document.getElementById('button2');
        startButton3.addEventListener('click', buildSettingsScreen);
    };

    let player1name, player2name;

    const buildSettingsScreen = () => {
        const buildSettingsScreen = buildDom(`
        <section class="splash-screen">
            <div class="settings-screen-center">
                <div>
                <h1 class="grow">¡Settings!</h1>
                <p class="titulo-settings">¡Elige tu nombre y que comience la partida!</p>
                <form>
                <input class="player12name swing" type="text" id="player1name" placeholder="Player one"><div class="separar-settings"></div>
                <input class="player12name swing" type="text" id="player2name" placeholder="Player two"><br>
                <div class="div-buttom-settings"><button class="boton-verde" id=button>Play</button></div>
                </form>
                <div>
            </div>
        </section>
        `);

        players = document.querySelectorAll('input');
        const startButtom = document.querySelector('#button');
        startButtom.addEventListener('click', buildGameScreen);
       
    };

    const buildGameScreen = () => {

        player1name = players[0].value;
        player2name = players[1].value;

        const buildGameScreen = buildDom(`
        <section class="splash-screen">
            <div class="flex-container">
                <div class="div1-flexcontainer">
                    <div class="down">
                        <p class="padding-bottom blackletter">Player 1:</p>
                        <div class="padding-bottom" id="nameplayer1"></div>
                        <div class="padding-bottom" id="puntosplayer1" class="pointsplayers"></div>
                    </div>
                </div>
                <div class="div2-flexcontainer">
                <div id="countdown"></div>
                </div>
                <div class="div3-flexcontainer">
                <div class="down">
                    <p class="padding-bottom blackletter">Player 2:</p>
                    <div class="padding-bottom" id="nameplayer2"></div>
                    <div class="padding-bottom" id="puntosplayer2" class="pointsplayers2"></div>
                </div>
                </div>
            <section class="game-screen">
            <canvas></canvas>
            </section>
        </section>
        `);

        document.getElementById('nameplayer1').innerText = player1name;
        document.getElementById('nameplayer2').innerText = player2name;

        
        const width = document.querySelector('.game-screen').offsetWidth;
        const height = document.querySelector('.game-screen').offsetHeight;
        
        const canvasElement = document.querySelector('canvas');
        
        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);
        
        
        let game = new Game(canvasElement);
        game.onOver(function(puntos1,puntos2){
            document.removeEventListener('keyup', setPlayerDirection);
            document.removeEventListener('keyup', setPlayer2Direction);
            buildGameOver(puntos1,puntos2)
        });
        document.getElementById("countdown").innerText ="1:00";
        
        game.contador();
        
        game.startLoop();

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

        document.addEventListener('keyup', setPlayerDirection);
        document.addEventListener('keyup', setPlayer2Direction);
        
    };

    const buildGameOver = (puntos1,puntos2) => {
        
        const buildGameOverScreen = buildDom(`
        <section class="game-over">
            <h1> Game over Screen</h1>
            <button id="button1">Restart</button>
            <button id="button2">Home</button>
            <div id="nameplayer1-1"></div>
            <div id="puntosplayer1"></div>
            <div id='nameplayer2-2'></div>
            <div id="puntosplayer2"></div>

        </section>
        `);

        const restartButton1 = document.querySelector('#button1');
        restartButton1.addEventListener('click', buildGameScreen);

        const restartButton2 = document.querySelector('#button2');
        restartButton2.addEventListener('click', buildSplashScreen);
    
        document.getElementById('puntosplayer1').innerText = puntos1;
        document.getElementById('puntosplayer2').innerText = puntos2;

        document.getElementById('nameplayer1-1').innerText = player1name;
        document.getElementById('nameplayer2-2').innerText = player2name;
    }

    buildSplashScreen();
};

window.addEventListener('load',main);

