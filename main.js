'use strict';

var global = [0];
console.log(global);
const main = () => {
    let players;

    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        return main;
    } 
    const buildSplashScreen = () => {
        const buildSplashScreen = buildDom(`
        <section class="splash-screen screens">
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

        var audio = new Audio();
        audio.src = 'musica.mp3';
        audio.play();

        const startButton1 = document.getElementById('button1');
        startButton1.addEventListener('click', buildSettingsScreen);

        const startButton2 = document.getElementById('button2');
        startButton2.addEventListener('click', buildInstructionsScreen);
    };

    const buildInstructionsScreen = () => {
        const buildInstructionsScreen = buildDom(`
        <section class="splash-screen screens">
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
        <section class="splash-screen screens">
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

        if(!players[0].value) {
            player1name = 'Player One'
        } else {
            player1name = players[0].value;
        }

        if(!players[1].value) {
            player2name = 'Player Two'
        } else {
            player2name = players[1].value;
        }

        const buildGameScreen = buildDom(`
        <section class="splash-screen">
            <div class="flex-container">
                <div class="div1-flexcontainer">
                    <div class="down">
                        <p class="padding-bottom blackletter color-player1">Player 1:</p>
                        <div class="padding-bottom color-player1" id="nameplayer1"></div>
                        <div class="padding-bottom color-player1" id="puntosplayer1" class="pointsplayers"></div>
                    </div>
                </div>
                <div class="div2-flexcontainer">
                <div id="countdown"></div>
                </div>
                <div class="div3-flexcontainer">
                <div class="down">
                    <p class="padding-bottom blackletter color-player2">Player 2:</p>
                    <div class="padding-bottom color-player2" id="nameplayer2"></div>
                    <div class="padding-bottom color-player2" id="puntosplayer2" class="pointsplayers2"></div>
                </div>
                </div>
                </div>
            <section class="game-screen">
            <canvas class="canvas"></canvas>
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

        <section class="splash-screen screens">
            <div class="gameover-screen-center">
            <div class="borde">
                <h1 class="grow">¡End of the game!</h1>
                <p class="titulo-gameover">¡Podrás volver al inicio o jugar de nuevo!</p>
            <div class="gameover-puntos">
                <div>
                    <h3 class="swing">Jugador 1</h3>
                    <div class="background-x player-color" id="nameplayer1-1"></div>
                    <div class="padding-div-gameover" ></div>
                    <div class="background-x player-color" id="puntosplayer1"></div>
                </div>
                <div>
                    <h3 class="swing">Jugador2</h3>
                    <div class="background-x player-color" id='nameplayer2-2'></div>
                    <div class="padding-div-gameover" ></div>
                    <div class="background-x player-color" id="puntosplayer2"></div>
                </div>
            </div>
            </div>
            <div class="padding-bottom-gameover flexbox-container-gameover">
                <div>
                    <button class="boton-blue home" id="button2">Home</button>
                </div>
                <div>
                    <button class="boton-blue" id="button1">Restart</button>
                </div>
                <div>
                    <button class="boton-blue" id="buttonxx">Top 5</button>
                </div>
            </div>
            </div>
        </section>
        `);
        

        const restartButtonxx = document.querySelector('#buttonxx');
        restartButtonxx.addEventListener('click', buildRakingScreen);

        const restartButton1 = document.querySelector('#button1');
        restartButton1.addEventListener('click', buildGameScreen);

        const restartButton2 = document.querySelector('#button2');
        restartButton2.addEventListener('click', buildSplashScreen);
    
        document.getElementById('puntosplayer1').innerText = puntos1;
        document.getElementById('puntosplayer2').innerText = puntos2;

        document.getElementById('nameplayer1-1').innerText = player1name;
        document.getElementById('nameplayer2-2').innerText = player2name;
    
        const localStorageScores = (event) => {
            if(localStorage.getItem('score') !== null){
                let localScores = JSON.parse(localStorage.getItem('score'));
                localScores.push(event);
                let sortArr = localScores.sort(function(a,b){return b-a;})
                if(sortArr.lenght >= 5) {
                    const slicedArray = sortArr.slice(0,5)
                    localStorage.setItem('score', JSON.stringify(slicedArray));
                } else {
                    localStorage.setItem('score', JSON.stringify(sortArr));
                };
            } else {
                const numberArray = [event]
                localStorage.setItem('score', JSON.stringify(numberArray));
            };
            global = [0];
        };
        localStorageScores(global);
    }

    const buildRakingScreen = () => {
        const buildRakingScreen = buildDom(`
        <section class="splash-screen screens">
        <div class="ranking-screen-center">
                <div>
                <h1 class="grow">¡TOP 5!</h1>
                <p class="titulo-settings">¡Aquí encontrarás las mayores puntuaciones conseguidas por usuarios!</p>
                <div>
                    <ol>
                        <li class="font-size1-ranking" id="li1">Hola</li>
                        <li class="font-size2-ranking" id="li2">Hola</li>
                        <li class="font-size3-ranking" id="li3">Hola</li>
                        <li class="font-size4-ranking" id="li4">Hola</li>
                        <li class="font-size5-ranking" id="li5">Hola</li>
                    </ol>
                </div>
                <div>
                    <button class="boton-verde" id="button1">Volver</button>
                </div>
                </div>
            </div>
        </section>
        `);

        const ranking = JSON.parse( localStorage.getItem('score'));
        document.getElementById('li1').innerText =ranking.slice(0,1);
        document.getElementById('li2').innerText =ranking.slice(1,2);
        document.getElementById('li3').innerText =ranking.slice(2,3);
        document.getElementById('li4').innerText =ranking.slice(3,4);
        document.getElementById('li5').innerText =ranking.slice(4,5);

        const startButtomx = document.querySelector('#button1');
        startButtomx.addEventListener('click', buildGameOver);
    };

    buildSplashScreen();
};

window.addEventListener('load',main);

