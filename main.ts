function Forward () {
    wuKong.setAllMotor(20, 20)
}
function Arm_down () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, -60)
}
function Arm_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function Backward () {
    wuKong.setAllMotor(-20, -20)
}
joystickbit.initJoystickBit()
radio.setGroup(21)
basic.showIcon(IconNames.Meh)
