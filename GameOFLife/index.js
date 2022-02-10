const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")
const game = new GameOfLife()
game.gameSetUp()
game.draw()
window.onload = () => {
    document.querySelector("#start-random").addEventListener("click", () => {
        game.arrayRandomize();
        game.fillArray();
        game.draw()
        var intervalID = window.setInterval(() => {
            game.runGame();
            game.draw()
        }, 300)
        document.querySelector("#stop").addEventListener("click", () => {
            game.gameSetUp();
            game.fillArray()
            game.draw()
            clearInterval(intervalID)
        })
    })
    document.querySelector("#start-arranged").addEventListener("click", () => {
        var intervalID = window.setInterval(() => {
            game.runGame();
            game.draw()
        }, 300)
        document.querySelector("#stop").addEventListener("click", () => {
            game.gameSetUp();
            game.fillArray()
            game.draw()
            clearInterval(intervalID)
        })
    })
}
canvas.onclick = function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    x = Math.floor(x/10);
    y = Math.floor(y/10);
    game.arrangePos(x, y)
}