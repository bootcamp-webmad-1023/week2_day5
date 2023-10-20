class Image {

    constructor(gameSize) {

        this.gameSize = gameSize

        this.imageSize = {
            w: 300,
            h: 300
        }

        this.imagePos = {
            left: 100,
            top: 350
        }

        this.init()
    }

    init() {

        this.imageElement = document.createElement('img')

        this.imageElement.style.position = "absolute"
        this.imageElement.style.width = `${this.imageSize.w}px`
        this.imageElement.style.height = `${this.imageSize.h}px`
        this.imageElement.style.left = `${this.imagePos.left}px`
        this.imageElement.style.top = `${this.imagePos.top}px`
        this.imageElement.src = './img/mario03.png'

        document.querySelector('#game-screen').appendChild(this.imageElement)
    }

}