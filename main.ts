huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
huskylens.writeName(1, "Rock")
huskylens.writeName(2, "Paper")
huskylens.writeName(3, "Scissors")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.SmallDiamond)
        huskylens.writeOSD("Rock", 150, 100)
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Square)
        huskylens.writeOSD("Paper", 150, 100)
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Scissors)
        huskylens.writeOSD("Scissors", 150, 100)
    } else {
        basic.showIcon(IconNames.No)
        huskylens.clearOSD()
    }
})
