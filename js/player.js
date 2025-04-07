
import { CTX, CANVAS, GRAVITY } from "./constants.js"

const JUMP_VELOCITY = -15;

export default class Player {
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

  update() {
    this.draw();
    this.velocity.y += GRAVITY;
    if (this.y >= CANVAS.height-this.height && this.velocity.y > 0) {
      this.velocity.y = 0;
      this.y = CANVAS.height - this.height
    }
    this.y += this.velocity.y;
  }

  draw() {
    CTX.fillStyle = "red";
    CTX.fillRect(this.x, this.y, this.width, this.height);
  }

  jump() {
    if (this.velocity.y == 0 && this.y >= CANVAS.height - this.height) {
      this.velocity.y = JUMP_VELOCITY;
    }
  }
}