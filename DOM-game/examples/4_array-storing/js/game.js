const Game = {

  gameScreen: document.querySelector("#game-screen"),

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  balls: [],

  keys: {
    SHOOT: 'Space'
  },

  init() {
    this.setDimensions()
    this.setEventListeners()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  setEventListeners() {

    document.onkeydown = (event) => {

      const { code } = event

      if (code === this.keys.SHOOT) {
        this.balls.push(new Circle(this.gameSize))
        console.log(this.balls)
      }
    }
  },

  start() {
    this.gameLoop()
  },

  gameLoop() {
    this.drawAll()
    this.clearAll()
    window.requestAnimationFrame(() => this.gameLoop())
  },

  drawAll() {
    this.balls.forEach(elm => elm.move())
  },

  clearAll() {

    this.balls.forEach((elm, idx) => {
      if (elm.circlePos.left > this.gameSize.w - 100) {
        this.balls.splice(idx, 1)         // Remove form array
        elm.circleElement.remove()        //  Remove from DOM
      }
    })

    // Alternative: filter()
    // this.balls = this.balls.filter(elm => {
    //   if (elm.circlePos.left < this.gameSize.w - 100) {
    //     return true
    //   }
    //   else {
    //     elm.circleElement.remove()
    //   }
    // })
  }
}