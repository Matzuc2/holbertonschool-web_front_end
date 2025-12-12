const roomDimensions = {
    width: 50,
    length: 100,
}
function getArea() {
    return(this.length * this.width)
}
const boundArea = getArea.bind(roomDimensions)
 console.log(boundArea())//optionnal
 