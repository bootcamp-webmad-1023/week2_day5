class Circle {

    constructor(gameSize) {

        this.gameSize = gameSize

        this.circleSize = {
            w: 50,
            h: 50
        }

        this.circlePos = {
            left: 10,
            top: 150
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

}