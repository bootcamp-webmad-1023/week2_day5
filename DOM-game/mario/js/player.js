class Player {

  constructor(gameScreen, gameSize) {

    this.gameScreen = gameScreen;
    this.gameSize = gameSize;
    this.bullets = [];

    this.playerSize = {
      w: 100,
      h: 100
    }

    this.playerPos = {
      left: 50,
      top: this.gameSize.h - this.playerSize.h - 20,
      base: this.gameSize.h - this.playerSize.h - 20,
    }

    this.playerVel = {
      left: 1,
      top: 0,
      gravity: 0.4
    }

    this.init()
  }

  init() {

    this.playerElement = document.createElement('img')
    this.playerElement.src = "./img/mario03.png"

    this.playerElement.style.position = "absolute"
    this.playerElement.style.width = `${this.playerSize.w}px`
    this.playerElement.style.height = `${this.playerSize.h}px`
    this.playerElement.style.left = `${this.playerPos.left}px`
    this.playerElement.style.top = `${this.playerPos.top}px`

    this.gameScreen.appendChild(this.playerElement)
  }

  move() {

    if (this.playerPos.top < this.playerPos.base) {       // está saltando!
      this.playerPos.top += this.playerVel.top;
      this.playerVel.top += this.playerVel.gravity;
    } else {
      this.playerPos.top = this.playerPos.base;
      this.playerVel.top = 1;
    }

    this.updatePosition()

    this.bullets.forEach(bullet => bullet.move())
    this.clearBullets()
  }

  updatePosition() {
    this.playerElement.style.left = `${this.playerPos.left}px`
    this.playerElement.style.top = `${this.playerPos.top}px`
  }

  jump() {
    if (this.playerPos.top >= this.playerPos.base) {
      this.playerPos.top -= 40;
      this.playerVel.top -= 8;
    }
  }

  shoot() {
    this.bullets.push(new Bullets(this.gameScreen, this.playerPos, this.playerSize));
  }

  clearBullets() {
    this.bullets.forEach((bull, idx) => {
      if (bull.bulletPos.left >= this.gameSize.w) {
        bull.bulletElement.remove()
        this.bullets.splice(idx, 1)
      }
    })
  }
}
