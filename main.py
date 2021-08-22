def on_sound_loud():
    basic.show_icon(IconNames.HEART)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

distance = 0
rekabit.set_rgb_pixel_color(0, 0x007fff)
rekabit.set_rgb_pixel_color(1, 0x00ff00)

def on_forever():
    global distance
    distance = 0
    pins.digital_write_pin(DigitalPin.P0, 0)
    control.wait_micros(2)
    pins.digital_write_pin(DigitalPin.P0, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P0, 0)
    distance = Math.idiv(pins.pulse_in(DigitalPin.P1, PulseValue.HIGH), 58)
    basic.show_number(distance)
    if distance < 30:
        soundExpression.giggle.play_until_done()
    basic.pause(100)
basic.forever(on_forever)
