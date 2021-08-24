input.onButtonPressed(Button.A, function () {
    rekabit.setServoPosition(ServoChannel.S1, 90)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
})
function calculateDistance () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P1, PulseValue.High), 58)
    return distance
}
input.onButtonPressed(Button.B, function () {
    rekabit.setServoPosition(ServoChannel.S1, 0)
})
let d = 0
let distance = 0
rekabit.setRgbPixelColor(0, 0x007fff)
rekabit.setRgbPixelColor(1, 0x00ff00)
rekabit.setServoPosition(ServoChannel.S1, 0)
basic.forever(function () {
    d = calculateDistance()
    if (d < 30) {
        soundExpression.giggle.playUntilDone()
    }
    basic.pause(100)
})
