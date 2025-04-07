/**
 * Animation bootstrap and example code
 * 
 * Author: Mr. Brash 🐿️  <matthew.brash@ocsb.ca>
 * Updated: April 2025
 */

'use strict';

import Player from "./player.js";
import { CANVAS, CTX, MS_PER_FRAME, SPACE, UP_ARROW, W } from "./constants.js";

// Globals
const HERO = new Player(10, 10, 40, 40);

let frame_time = performance.now()
let pause = false;

// Event Listeners
document.addEventListener("keydown", keypress);

/**
 * Disable the context menu on the entire document
 */
document.addEventListener("contextmenu", (event) => { 
  event.preventDefault();
  return false; 
});

/**
 * Shortcut for the document.getElementById() function
 * @param {String} id The unique identifier of the element being requested.
 * @returns HTML Element Object
 */
function $(id) { return document.getElementById(id); }

/**
 * Test the sprite sheet by grabbing and drawing the selected dimensions.
 * @param {Number} sx Source x
 * @param {Number} sy Source y
 * @param {Number} sw Source width
 * @param {Number} sh Source height
 * @param {Number} dx Destination x (default=0)
 * @param {Number} dy Destination y (default=0)
 */
function test_sprite(sheet, sx, sy, sw, sh, dx=0, dy=0, clear=false) {
  if (clear) C.CTX.clearRect(0, 0, C.CANVAS.width, C.CANVAS.height);

  C.CTX.drawImage($(sheet), sx, sy, sw, sh, dx, dy, sw, sh);
}

/**
 * The user pressed a key on the keyboard 
 */
function keypress(event) {
  switch (event.keyCode) {
    // Jump
    case UP_ARROW:
    case W:
    case SPACE:
      HERO.jump();
      break;

    default:
      return;
  }
  event.preventDefault();
}


/**
 * The main game loop
 */
function update() {
  // Prepare for the next frame
  if (!pause) requestAnimationFrame(update)
  
  /*** Desired FPS Trap ***/
  const NOW = performance.now()
  const TIME_PASSED = NOW - frame_time
  
  if (TIME_PASSED < MS_PER_FRAME) return
  
  const EXCESS_TIME = TIME_PASSED % MS_PER_FRAME
  frame_time = NOW - EXCESS_TIME
  /*** END FPS Trap ***/
  
  // Clear the canvas
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
  // Draw our hero
  HERO.update();
  
}

// Start the animation
update()