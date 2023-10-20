const Game = {

  gameScreen: document.querySelector("#game-screen"),

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  keys: {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight'
  },

  square: undefined,

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
    this.setEventListeners()
    this.gameLoop()
  },

  setEventListeners() {
    document.onkeydown = event => {
      const { code } = event

      switch (code) {
        case this.keys.LEFT:
          this.square.moveLeft()
          break
        case this.keys.RIGHT:
          this.square.moveRight()
          break
      }
    }
  },

  createElements() {
    this.square = new Square(this.gameSize)
  },

  gameLoop() {
    this.drawAll()
    window.requestAnimationFrame(() => this.gameLoop())
  },

  drawAll() {
    this.square.move()
  }
}
