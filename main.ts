input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
})
let distance = 0
rekabit.setRgbPixelColor(0, 0x007fff)
rekabit.setRgbPixelColor(1, 0x00ff00)
basic.forever(function () {
    distance = 0
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P1, PulseValue.High), 58)
    basic.showNumber(distance)
    if (distance < 30) {
        soundExpression.giggle.playUntilDone()
    }
    basic.pause(100)
})
