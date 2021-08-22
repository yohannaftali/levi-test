input.onButtonPressed(Button.A, function () {
    rekabit.setServoPosition(ServoChannel.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    rekabit.setServoPosition(ServoChannel.S1, 90)
})
rekabit.setServoPosition(ServoChannel.S1, 90)
basic.forever(function () {
	
})
