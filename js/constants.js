/**
 * Keep all the constants in one place, in case they need to be shared across modules/imports
 */
export const CANVAS = document.getElementById('game_canvas');
//export default CANVAS;
export const CTX = CANVAS.getContext('2d');
export const FPS = 60;
export const MS_PER_FRAME = 1000 / FPS;
export const GRAVITY = 1;

// Keyboard presses
export const SPACE = 32;

export default {}