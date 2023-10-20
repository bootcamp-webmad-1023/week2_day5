const Game = {

  gameScreen: document.querySelector('#game-screen'),

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  start() {
    new Square(this.gameSize)
    new Circle(this.gameSize)
    new Image(this.gameSize)
  }
}