class Circle {

  constructor(gameSize) {

    this.gameSize = gameSize

    this.circleSize = {
      w: 20,
      h: 20
    }

    this.circlePos = {
      left: 0,
      top: 0
    }

    this.circleVel = {
      top: 2,
      left: 5
    }

    this.init()
  }

  init() {

    this.circleElement = document.createElement('div')

    this.circleElement.style.position = "absolute"
    this.circleElement.style.width = `${this.circleSize.w}px`
    this.circleElement.style.height = `${this.circleSize.h}px`
    this.circleElement.style.left = `${this.circlePos.left}px`
    this.circleElement.style.top = `${this.circlePos.top}px`
    this.circleElement.style.backgroundColor = `red`
    this.circleElement.style.borderRadius = '50%'

    document.querySelector('#game-screen').appendChild(this.circleElement)
  }

  move() {

    if (
      this.circlePos.top >= this.gameSize.h - this.circleSize.h ||
      this.circlePos.top < 0
    ) {
      this.turnTop()
    }

    if (
      this.circlePos.left >= this.gameSize.w - this.circleSize.w ||
      this.circlePos.left < 0
    ) {
      this.turnLeft()
    }

    this.circlePos.top += this.circleVel.top
    this.circlePos.left += this.circleVel.left

    this.updatePosition()
  }

  turnTop() {
    this.circleVel.top *= -1
  }

  turnLeft() {
    this.circleVel.left *= -1
  }

  updatePosition() {
    this.circleElement.style.left = `${this.circlePos.left}px`
    this.circleElement.style.top = `${this.circlePos.top}px`
  }

}