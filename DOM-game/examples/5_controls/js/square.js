class Square {

  constructor(gameSize) {

    this.gameSize = gameSize

    this.squareSize = {
      w: 80,
      h: 80
    }

    this.squarePos = {
      left: 10,
      top: gameSize.h - this.squareSize.h
    }

    this.squareVel = {
      left: 10,
      top: 5
    }

    this.init()
  }

  init() {

    this.squareElement = document.createElement('div')

    this.squareElement.style.position = "absolute"
    this.squareElement.style.width = `${this.squareSize.w}px`
    this.squareElement.style.height = `${this.squareSize.h}px`
    this.squareElement.style.left = `${this.squarePos.left}px`
    this.squareElement.style.top = `${this.squarePos.top}px`
    this.squareElement.style.backgroundColor = `black`

    document.querySelector('#game-screen').appendChild(this.squareElement)
  }

  move() {
    this.updatePosition()
  }

  moveLeft() {
    this.squarePos.left -= this.squareVel.left
  }

  moveRight() {
    this.squarePos.left += this.squareVel.left
  }

  updatePosition() {
    this.squareElement.style.left = `${this.squarePos.left}px`
    this.squareElement.style.top = `${this.squarePos.top}px`
  }
}