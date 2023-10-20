const Game = {
  gameScreen: document.querySelector("#game-screen"),
  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  background: undefined,

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  start() {
    this.createElements()
    this.gameLoop()
  },

  createElements() {
    this.background = new Background(this.gameScreen, this.gameSize)
  },

  gameLoop() {
    this.drawAll()
    window.requestAnimationFrame(() => this.gameLoop())
  },

  drawAll() {
    this.background.move()
  }

}
