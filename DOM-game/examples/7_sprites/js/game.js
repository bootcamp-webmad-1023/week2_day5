const Game = {
  gameScreen: document.querySelector("#game-screen"),
  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  player: undefined,

  framesIndex: 0,

  keys: { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight' },

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
      switch (event.code) {
        case this.keys.LEFT:
          this.player.moveLeft()
          break;
        case this.keys.RIGHT:
          this.player.moveRight()
          break;
      }
    }
  },

  createElements() {
    this.player = new Player(this.gameScreen, this.gameSize, this.keys)
  },

  gameLoop() {
    this.drawAll()
    this.incrementFrames()
    window.requestAnimationFrame(() => this.gameLoop())
  },

  incrementFrames() {
    this.framesIndex > 5000 ? this.framesIndex = 0 : this.framesIndex++
  },

  drawAll() {
    this.player.move(this.framesIndex)
  }
}
