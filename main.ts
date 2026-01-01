basic.showIcon(IconNames.Yes)
let nb_leds = 10
let montee_1 = 5
let dureeMontee = 10000
let strip = neopixel.create(DigitalPin.P1, nb_leds, NeoPixelMode.RGB)
let descente_1 = 3
let montee_2 = 9
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.showIcon(IconNames.Heart)
basic.pause(100)
for (let index = 0; index < montee_1; index++) {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(1000)
    strip.shift(1)
}
strip.shift(-1)
basic.pause(2000)
for (let index = 0; index < descente_1; index++) {
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
    basic.pause(2000)
    strip.show()
    strip.shift(-1)
}
strip.shift(1)
basic.pause(2000)
for (let index = 0; index < montee_2; index++) {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(2000)
    strip.shift(1)
}
basic.forever(function () {
	
})
