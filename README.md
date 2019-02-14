# Pain Room

## Descripción

El juego consiste en pintar el máximo número de cuadrados en una casilla antes de que el tiempo se agote.

## MVP - Tecnología (DOM - CANVAS)

Canvas

## Backlog

- Pantalla SelectGame que contenga:
    - El nombre del jugador.
-El color que seleccione el jugador.
El tamaño del panel en el que quieres jugar.
El tiempo que quieres que dure la partida;
Botón de Inicio en la pantalla “GameOver” para volver al inicio.

## Estructuras de Datos

Clase Player
    - Dirección
    - Tamaño
    - Posición inicial(x,y)
    - Velocidad?
    - canvas
    - ctx
    - Color
    - Move();
    - Pintar();

Class Mapa
    - Tamaño general.
    - Tamaño cuadrado.
    - Grid.
    - canvas
    - ctx
    - Pintar();
    - Update();

Class Game
    - tiempo
    - mapa
    - player
    - checkTime();
    - startLoop();
    - loop();
    - onGameOver();
    - clearCanvas();
    - drawCanvas();
    - updateCanvas();

main.js
    - buildDom();
    - buildStartScreen();
    - buildGameScreen();
    - buildGameOverScreen();

## States y States Transitions

Definicion del las transiciones del juego y del main.

- startScreen 
- gameScreen
- gameoverScreen

StartScreen tiene botón de Empezar y va a la pantalla gameScreen.
Cuando se acaba el tiempo pasa de gameScreen a gameoverScreen.
Desde gameOverScreen podrás pasar a la pantalla gameScreen para volver a jugar.

## Task
- Crear todos los archivos necesarios.
- Crear buildDom
- Crear buildStartScreen
- Crear GameScreen
- Crear GameOverScreen
- Vincular Pantallas
- Crear game
- Hacer grid
- Tamaño mapa general/cuadrado
- Crear jugador con sus valores
- Posición inicial jugador
- Verificar que se mueva el jugador.
- Fijar su velocidad/color.
- Comprobar que pinte el mapa.
- Limitar para que no se salga de la pantalla.
- Fijar un tiempo y configurar.
- Hacer diseño.
-Tomarme una cerveza.

## Links

### Trello

[Link url](https://trello.com)

### Git

Especificar las url del proyecto y del deploy

[Link Repositorio](https://github.com/danieltellezllinas/project1-PaintRoom)

[Link Deploy](http://github.com)

### Slides.com

Especificar la url de la presentacion

[Link Slides.com](http://slides.com)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones


