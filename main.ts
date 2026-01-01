basic.showIcon(IconNames.Yes)
let nb_leds = 130
let montee_1 = 87
let montee_1bis = 5
let dureeMontee = 10000
let strip = neopixel.create(DigitalPin.P1, nb_leds, NeoPixelMode.RGB)
let descente_1 = 6
let montee_2 = 51
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.showIcon(IconNames.Heart)
basic.pause(100)
for (let index = 0; index < montee_1; index++) {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(randint(50, 150))
    strip.shift(1)
}
for (let index = 0; index < montee_1bis; index++) {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(randint(1000, 2500))
    strip.shift(1)
}
strip.shift(-1)
for (let index = 0; index < descente_1; index++) {
    strip.setPixelColor(100, neopixel.colors(NeoPixelColors.Black))
    basic.pause(randint(500, 1500))
    strip.show()
    strip.shift(-1)
}
strip.shift(1)
basic.pause(500)
for (let index = 0; index < montee_2; index++) {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(randint(100, 250))
    strip.shift(1)
}
basic.forever(function () {
	
})
