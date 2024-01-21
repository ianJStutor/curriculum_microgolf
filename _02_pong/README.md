# Microgolf 02: Pong Ball

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Files

* <code>index.html</code> - Entry file for every web app
* <code>index.js</code> - JavaScript module for setting up an app
* <code>fullscreenCanvas.js</code> - JavaScript module for managing a full-screen canvas that self adjusts with browser window resizing
* <code>lib.js</code> - helper functions in one library

## Lesson notes

### 01 - Pong

<figure>![Pong](https://upload.wikimedia.org/wikipedia/commons/6/62/Pong_Game_Test2.gif)<figcaption><small>[Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pong_Game_Test2.gif) under the [Creative Commons Attribution 3.0 Unported](https://creativecommons.org/licenses/by/3.0/deed.en) license</small></figcaption></figure>

1. Describe game and history


### 02 - Lerp and libraries

1. Define algorithm and use cases

### 03 - Ball state and life

1. ball and resetBall()
2. init() is a new function that calls resetBall()
3. ball.life short (100 frames) for now because there's no collision detection; ball will fly off canvas right away

### 04 - Update and draw ball

1. Delete testing code from loop()
2. Euler integration
3. Life countdown before resetBall()

### 05 - Wall collision

1. Position relative to canvas width and height
2. Velocity change
3. Increase life (code uses 250 frames)