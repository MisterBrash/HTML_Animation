'use strict';

const CANVAS = document.querySelector('canvas')
const CONTEXT = CANVAS.getContext('2d')

let frame_time = performance.now()
let pause = false;
const FPS = 60
const MS_PER_FRAME = 1000 / FPS

function update() {
  // Prepare for the next frame
  if (!pause) requestAnimationFrame(update)

  /*** FPS Trap ***/
  const NOW = performance.now()
  const TIME_PASSED = NOW - frame_time

  if (TIME_PASSED < MS_PER_FRAME) return

  const EXCESS_TIME = TIME_PASSED % MS_PER_FRAME
  frame_time = NOW - EXCESS_TIME
  /*** END FPS Trap ***/


}

// Start the animation
update()