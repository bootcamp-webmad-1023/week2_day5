class Square {

    constructor(gameSize) {

        this.gameSize = gameSize

        this.squareSize = {
            w: 200,
            h: 200
        }

        this.squarePos = {
            left: (gameSize.w / 2) - (this.squareSize.w / 2),
            top: (gameSize.h / 2) - (this.squareSize.h / 2)
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

}