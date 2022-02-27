let Kopf = 0
input.onGesture(Gesture.Shake, function () {
    Kopf = randint(1, 2)
    if (Kopf == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (Kopf == 2) {
        basic.showNumber(1)
    }
})
basic.forever(function () {
	
})
