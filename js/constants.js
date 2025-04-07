/**
 * constants.js
 * 
 * Keep all the constants in one place, in case they need to be shared across modules/imports
 * 
 * Author: Mr. Brash 🐿️  <matthew.brash@ocsb.ca>
 */

// Drawing / updating
export const CANVAS = document.getElementById('game_canvas');
export const CTX = CANVAS.getContext('2d');
export const FPS = 60;
export const MS_PER_FRAME = 1000 / FPS;

// Movement
export const GRAVITY = 1;
export const FLOOR = CANVAS.height;  // Careful - if the height ever changes...

// Keyboard presses
export const SPACE = 32;
export const UP_ARROW = 38;
export const LEFT_ARROW = 37;
export const DOWN_ARROW = 40;
export const RIGHT_ARROW = 39;
export const W = 87;
export const A = 65;
export const S = 83;
export const D = 68;

// Export all the constants by default
export default { CANVAS, CTX, FPS, MS_PER_FRAME, GRAVITY, FLOOR, SPACE }