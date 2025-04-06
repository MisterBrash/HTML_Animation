/**
 * Animation bootstrap and example code
 * 
 * Author: Mr. Brash 🐿️  <matthew.brash@ocsb.ca>
 * Updated: April 2025
 */

'use strict';

import Player from "./player.js";

const CANVAS = document.querySelector('canvas')
const CTX = CANVAS.getContext('2d')

const HERO = new Player(0, 0, 40, 40, CTX);

let frame_time = performance.now()
let pause = false;
const FPS = 60
const MS_PER_FRAME = 1000 / FPS

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
  if (clear) CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  CTX.drawImage($(sheet), sx, sy, sw, sh, dx, dy, sw, sh);
}

function update() {
  // Prepare for the next frame
  if (!pause) requestAnimationFrame(update)

  /*** FPS Trap ***/
  const NOW = performance.now()
  const TIME_PASSED = NOW - frame_time

  if (TIME_PASSED < MS_PER_FRAME) return

  const EXCESS_TIME = TIME_PASSED % MS_PER_FRAME
  frame_time = Math.floor(NOW - EXCESS_TIME)
  /*** END FPS Trap ***/

  
}

// Start the animation
update()