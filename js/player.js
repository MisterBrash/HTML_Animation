/**
 * player.js
 * 
 * The Player Class
 * 
 * Acts as a sprite or "hero" for the game
 * 
 * Author: Mr. Brash 🐿️  <matthew.brash@ocsb.ca>
 */

import { CTX, CANVAS, GRAVITY, FLOOR } from "./constants.js"

export default class Player {
  #JUMP_VELOCITY = -15;
  
  constructor(x, y, width, height, initial_velocity_y = -3) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.velocity = {
      x: 0,
      y: initial_velocity_y
    };
  }

  // Determine where the player's foot is (y-value)
  get bottom() { return this.y + this.height; }

  /**
   * Main function to update location, velocity, and image
   */
  update() {
    this.draw();
    this.velocity.y += GRAVITY;
    if (this.bottom >= FLOOR && this.velocity.y > 0) {
      this.velocity.y = 0;
      this.y = CANVAS.height - this.height
    }
    this.y += this.velocity.y;
  }

  /**
   * Draw the player on the canvas
   */
  draw() {
    CTX.fillStyle = "yellow";
    CTX.fillRect(this.x, this.y, this.width, this.height);
  }

  /**
   * Given the "jump" directive
   */
  jump() {
    if (this.velocity.y == 0 && this.bottom >= FLOOR) {
      this.velocity.y = this.#JUMP_VELOCITY;
    }
  }
}