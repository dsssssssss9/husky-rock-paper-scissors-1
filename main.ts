function Compare () {
	
}
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
huskylens.clearOSD()
huskylens.writeName(1, "Rock")
huskylens.writeName(2, "Paper")
huskylens.writeName(3, "Scissors")
huskylens.writeOSD("Rock paper Scissors", 75, 30)
basic.pause(2000)
let Scissors = 1
let Paper = -1
let Rock = 0
let Maqueen = 2
let Player = 2
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
