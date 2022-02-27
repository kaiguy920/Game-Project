// ===================VARIABLES==============================
const lightBlueCar = document.querySelector('#lightBlueCar')
const navyDump = document.querySelector('#navyDump')
const greenCar = document.querySelector('#greenCar')
const orangeCar = document.querySelector('#orangeCar')
const purpleDump = document.querySelector('#purpleDump')
const redCar = document.querySelector('#redCar')
const tealDump = document.querySelector('#tealDump')
const yellowDump = document.querySelector('#yellowDump')

const squareArray = [r2c2, r2c3, r2c4, r2c5, r2c6, r2c7, r3c2, r3c3, r3c4, r3c5, r3c6, r3c7, r4c2, r4c3, r4c4, r4c5, r4c6, r4c7, r5c2, r5c3, r5c4, r5c5, r5c6, r5c7, r6c2, r6c3, r6c4, r6c5, r6c6, r6c7, r7c2, r7c3, r7c4, r7c5, r7c6, r7c7]
const unavailableSquares = []
const availableSquares = []

// ========================HOVER TO HIGHLIGHT MULTIPLE SQUARES=======
const greenCarSquares = () => {
    if (r2c2.contains(getGreenCarSpan)) {
        r2c3.className = " nogo"
    } else if
        (r2c3.contains(getGreenCarSpan)) {
        r2c4.className = " nogo"
    } else if
        (r2c4.contains(getGreenCarSpan)) {
        r2c5.className = " nogo"
    } else if
        (r2c5.contains(getGreenCarSpan)) {
        r2c5.className = " nogo"
    } else if
        (r2c6.contains(getGreenCarSpan)) {
        r2c7.className = " nogo"
    }
}

const purpleDumpSquares = (e) => {
    if (r3c2.contains(getPurpleDumpSpan)) {
        r4c2.className = "filled"
        r5c2.className = "filled"
    } else if
        (r2c2.contains(getPurpleDumpSpan)) {
        r3c2.className = " nogo"
        r4c2.className = " nogo"
    } else if
        (r4c2.contains(getPurpleDumpSpan)) {
        r5c2.className = " nogo"
        r6c2.className = " nogo"
    } else if
        (r5c2.contains(getPurpleDumpSpan)) {
        r6c2.className = " nogo"
        r7c2.className = " nogo"
    }
    e.preventDefault()
}

const navyDumpSquares = () => {
    if (r3c5.contains(getNavyDumpSpan)) {
        r4c5.className = " nogo"
        r5c5.className = " nogo"
    } else if
        (r2c5.contains(getNavyDumpSpan)) {
        r3c5.className = " nogo"
        r4c5.className = " nogo"
    } else if
        (r4c5.contains(getNavyDumpSpan)) {
        r5c5.className = " nogo"
        r6c5.className = " nogo"
    } else if
        (r5c5.contains(getNavyDumpSpan)) {
        r6c5.className = " nogo"
        r7c5.className = " nogo"
    }
}

const yellowDumpSquares = () => {
    if (r5c7.contains(getYellowDumpSpan)) {
        r6c7.className = " nogo"
        r7c7.className = " nogo"
    } else if
        (r2c7.contains(getYellowDumpSpan)) {
        r3c7.className = " nogo"
        r4c7.className = " nogo"
    } else if
        (r3c7.contains(getYellowDumpSpan)) {
        r4c7.className = " nogo"
        r3c7.className = " nogo"
    } else if
        (r4c7.contains(getYellowDumpSpan)) {
        r5c7.className = " nogo"
        r6c7.className = " nogo"
    }
}

const lightBlueCarSquares = () => {
    if (r6c6.contains(getlightBlueCarSpan)) {
        r6c7.className = " nogo"
    } else if
        (r6c5.contains(getlightBlueCarSpan)) {
        r6c6.className = " nogo"
    } else if
        (r6c4.contains(getlightBlueCarSpan)) {
        r6c5.className = " nogo"
    } else if
        (r6c3.contains(getlightBlueCarSpan)) {
        r6c4.className = " nogo"
    }
    else if
        (r6c2.contains(getlightBlueCarSpan)) {
        r6c3.className = " nogo"
    }
}
const redCarSquares = () => {
    if (r4c2.contains(getRedCarSpan)) {
        r4c3.className = " nogo"
    } else if
        (r4c4.contains(getRedCarSpan)) {
        r4c5.className = " nogo"
    } else if
        (r4c5.contains(getRedCarSpan)) {
        r4c6.className = " nogo"
    } else if
        (r4c6.contains(getRedCarSpan)) {
        r4c7.className = " nogo"
    }
    else if
        (r4c3.contains(getRedCarSpan)) {
        r4c4.className = " nogo"
    }
}
const orangeCarSquares = () => {
    if (r6c2.contains(getOrangeCarSpan)) {
        r7c2.className = " nogo"
    } else if
        (r5c2.contains(getOrangeCarSpan)) {
        r6c2.className = " nogo"
    } else if
        (r4c2.contains(getOrangeCarSpan)) {
        r5c2.className = " nogo"
    } else if
        (r3c2.contains(getOrangeCarSpan)) {
        r4c2.className = " nogo"
    }
    else if
        (r2c2.contains(getOrangeCarSpan)) {
        r3c2.className = " nogo"
    }
}

// ===================ASSIGNING "EMPTY SQUARES"=========================
for (let i = 0; i < squareArray.length; i++) {
    // if (!unavailableSquares.contains(squareArray[i])) {
    if (squareArray[i].contains(getRedCarSpan)) {
        unavailableSquares.push(squareArray[i])
        unavailableSquares.push(squareArray[i + 1])
    } else if
        (squareArray[i].contains(getTealDumpSpan)) {
        unavailableSquares.push(squareArray[i])
        unavailableSquares.push(squareArray[i + 1])
        unavailableSquares.push(squareArray[i + 2])
    } else if
        (squareArray[i].contains(getYellowDumpSpan)) {
        unavailableSquares.push(squareArray[i])
        unavailableSquares.push(squareArray[i + 6])
        unavailableSquares.push(squareArray[i + 12])
    } else if
        (squareArray[i].contains(getNavyDumpSpan)) {
        unavailableSquares.push(squareArray[i])
        unavailableSquares.push(squareArray[i + 6])
        unavailableSquares.push(squareArray[i + 12])
    } else if
        (squareArray[i].contains(getPurpleDumpSpan)) {
        unavailableSquares.push(squareArray[i])
        unavailableSquares.push(squareArray[i + 6])
        unavailableSquares.push(squareArray[i + 12])
    } else if
        (squareArray[i].contains(getGreenCarSpan)) {
        unavailableSquares.push(squareArray[i])
        unavailableSquares.push(squareArray[i + 1])
    } else if
        (squareArray[i].contains(getLightBlueCarSpan)) {
        unavailableSquares.push(squareArray[i])
        unavailableSquares.push(squareArray[i + 1])
    } else if
        (squareArray[i].contains(getOrangeCarSpan)) {
        unavailableSquares.push(squareArray[i])
        unavailableSquares.push(squareArray[i + 6])
    }
}



console.log("unavailableSquares", unavailableSquares)

unavailableSquares.forEach((div) => {
    div.className = "filled"
})

for (let i = 0; i < squareArray.length; i++) {
    if (squareArray[i].className != "filled") {
        availableSquares.push(squareArray[i])
    }
}
console.log("available squares", availableSquares)