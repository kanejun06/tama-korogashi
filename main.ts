input.onButtonPressed(Button.A, function () {
    if (game.isGameOver()) {
        game.startCountdown(30000)
    }
})
let Player = game.createSprite(0, 0)
let Goal = game.createSprite(randint(1, 4), randint(1, 4))
game.startCountdown(30000)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 150) {
        Player.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -150) {
        Player.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 150) {
        Player.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -150) {
        Player.change(LedSpriteProperty.Y, -1)
    }
    if (Player.isTouching(Goal)) {
        Player.delete()
        Goal.delete()
        basic.showIcon(IconNames.Happy)
        game.addScore(1)
        Player = game.createSprite(0, 0)
        Goal = game.createSprite(randint(1, 4), randint(1, 4))
    }
    basic.pause(100)
})
