const board = document.querySelector('#imgContainer')
const lightBlueCar = document.querySelector('#lightBlueCar')
const navyDump = document.querySelector('#navyDump')
const greenCar = document.querySelector('#greenCar')
const orangeCar = document.querySelector('#orangeCar')
const purpleDump = document.querySelector('#purpleDump')
const redCar = document.querySelector('#redCar')
const tealDump = document.querySelector('#tealDump')
const yellowDump = document.querySelector('#yellowDump')
const reset = document.querySelector('#reset')
const allCars = document.querySelectorAll('.cars')
const squares = document.querySelectorAll('.squares')
const draggable = document.querySelector('#draggable')
let whichCar = ""
const winner = document.querySelector('#winner')
let currentCar;
let count = 0;
const r4c8 = document.querySelector('#r4c8')
const countMoves = document.getElementById('countMoves')
const topOut = document.querySelector('#topOut')
const bottomOut = document.querySelector('#bottomOut')
const leftOut = document.querySelector('#leftOut')
const rightOutTop = document.querySelector('#rightOutTop')
const rightOutBottom = document.querySelector('#leftOut')
// ==========================LEVEL 1 BOARD========================
const getGreenCar = document.getElementById('greenCar')
const getLightBlueCar = document.getElementById('lightBlueCar')
const getNavyDump = document.getElementById('navyDump')
const getOrangeCar = document.getElementById('orangeCar')
const getPurpleDump = document.getElementById('purpleDump')
const getRedCar = document.getElementById('redCar')
const getTealDump = document.getElementById('tealDump')
const getYellowDump = document.getElementById('yellowDump')
const r2c2 = document.getElementById('r2c2')
const r3c2 = document.getElementById("r3c2")
const r6c2 = document.getElementById("r6c2")
const r4c3 = document.getElementById('r4c3')
const r4c4 = document.getElementById('r4c4')
const r3c5 = document.getElementById('r3c5')
const r2c7 = document.getElementById("r2c7")
const r6c6 = document.getElementById("r6c6")
const r7c4 = document.getElementById('r7c4')
const greenCarStart = document.getElementById('greenCarStart')
// =============================SPAN==================================
const getGreenCarSpan = document.querySelector('#greenCarSpan')
const getLightBlueCarSpan = document.querySelector('#lightBlueCarSpan')
const getNavyDumpSpan = document.querySelector('#navyDumpSpan')
const getOrangeCarSpan = document.querySelector('#orangeCarSpan')
const getPurpleDumpSpan = document.querySelector('#purpleDumpSpan')
const getRedCarSpan = document.querySelector('#redCarSpan')
const getTealDumpSpan = document.querySelector('#tealDumpSpan')
const getYellowDumpSpan = document.querySelector('#yellowDumpSpan')


// document.getElementById('start').addEventListener('click', () => {
//     r2c2.appendChild(greenCar)
//     r3c2.appendChild(purpleDump)
//     r6c2.appendChild(orangeCar)
//     r4c3.appendChild(redCar)
//     r3c5.appendChild(navyDump)
//     r2c7.appendChild(yellowDump)
//     r6c6.appendChild(lightBlueCar)
//     r7c4.appendChild(tealDump)
// })

// =========================START=================================
document.addEventListener('DOMContentLoaded', (event) => {
    r2c2.appendChild(getGreenCarSpan)
    r3c2.appendChild(getPurpleDumpSpan)
    r6c2.appendChild(getOrangeCarSpan)
    r4c3.appendChild(getRedCarSpan)
    r3c5.appendChild(getNavyDumpSpan)
    r2c7.appendChild(getYellowDumpSpan)
    r6c6.appendChild(getLightBlueCarSpan)
    r7c4.appendChild(getTealDumpSpan)
})

// console.log("green car span", getGreenCarSpan)
// getGreenCarSpan.parentNode.append("div.#r2c3.squares")

// const greenSpace = () => {
//     for (let i = 0; i < squares.length; i++) {
//         if (squares[i].lastElementChild === "span#greenCarSpan.filled") {
//             squares[i++] = "span#greenCarSpan.filled"
//         }
//     }
// }

// console.log(squares)
document.getElementById('start').addEventListener('click', () => {

    // ===================ASSIGNING "EMPTY SQUARES"=========================
    for (const empty of squares) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
        // console.log("empty the first", empty);
    }


    // ====================DRAGSTART===========================
    getRedCarSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getRedCarSpan
        dragStart()
    })
    getLightBlueCarSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getLightBlueCarSpan
        dragStart()
    })
    getNavyDumpSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getNavyDumpSpan
        dragStart()
    })
    getYellowDumpSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getYellowDumpSpan
        dragStart()
    })
    getGreenCarSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getGreenCarSpan
        dragStart()
    })
    getOrangeCarSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getOrangeCarSpan
        dragStart()
    })
    getPurpleDumpSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getPurpleDumpSpan
        dragStart()
    })
    getTealDumpSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getTealDumpSpan
        dragStart()
    })
    // ===============DRAGEND=============================
    getRedCarSpan.addEventListener('dragend', () => {
        if (r4c8.contains(getRedCarSpan)) {
            // console.log("winner!!")
            winner.innerText = "You steared through that one! \n 🏁 🚗 🎉"
        }
        dragEnd()
    })
    getNavyDumpSpan.addEventListener('dragend', () => {
        dragEnd()
    })
    getLightBlueCarSpan.addEventListener('dragend', () => {
        dragEnd()
    })

    getYellowDumpSpan.addEventListener('dragend', () => {
        dragEnd()
    })
    getGreenCarSpan.addEventListener('dragend', () => {
        dragEnd()
    })
    getOrangeCarSpan.addEventListener('dragend', () => {
        dragEnd()
    })
    getPurpleDumpSpan.addEventListener('dragend', () => {
        dragEnd()
    })
    getTealDumpSpan.addEventListener('dragend', () => {
        dragEnd()
    })

    // getTealDumpSpan.addEventListener('dragenter', (e) => {
    //     // e.preventDefault()
    //     //     // this.className += " hovered"
    //     console.log('hit this bitch', e)
    //     const square = document.getElementById(this.id)
    //     // console.log('here::::', square.contains(getYellowDumpSpan))
    //     // // Once you limit the travel to be horizontal or vertical then you know you only need to check the square for the specific cars it can run into.

    //     // // if green car, red car - does square contain yellowdump, bluedump, or purpledump.
    //     // if (square.contains(getYellowDumpSpan) || square.contains(getNavyDumpSpan) || square.contains(getPurpleDumpSpan)) {

    //     // }

    //     // // if glue car - does square contains yellowdump, bluedump, purpledump, or orange car.
    //     if (square.contains(getYellowDumpSpan) || square.contains(getNavyDumpSpan) || square.contains(getPurpleDumpSpan)) {
    //         console.log('here!@#$T$')
    //     } else {
    //         dragDrop()
    //     }
    // })

    function dragStart() {
        this.className += ' hold'
        setTimeout(() => this.className = 'invisible', 0)
        console.log('start')

    }

    function dragEnd() {
        console.log('end')
    }


    function dragOver(e) {
        if (!isMoveValid(this.id)) {
            this.className += " nogo"
        }
        if (isSquareFilled(this.id)) {
            this.className += " nogo"
        }

        // greenCarSquares()
        purpleDumpSquares()
        e.preventDefault()
        // this.className += " hovered"
        // console.log("over");
    }

    function dragEnter(e) {

        e.preventDefault()
        this.className += " hovered"
        console.log("enter");
    }

    function dragLeave() {
        this.className = 'empty'
        console.log('leave');
    }

    allCars.className = 'empty'



    // ==============================DRAGDROP===============================================

    // getRedCarSpan.addEventListener('dragdrop', () => {
    //     // e.preventDefault()
    //     //     // this.className += " hovered"
    //     console.log('hit this bitch', e)
    //     const square = document.getElementById(this.id)
    //     // console.log('here::::', square.contains(getYellowDumpSpan))
    //     // // Once you limit the travel to be horizontal or vertical then you know you only need to check the square for the specific cars it can run into.

    //     // // if green car, red car - does square contain yellowdump, bluedump, or purpledump.
    //     // if (square.contains(getYellowDumpSpan) || square.contains(getNavyDumpSpan) || square.contains(getPurpleDumpSpan)) {

    //     // }

    //     // // if glue car - does square contains yellowdump, bluedump, purpledump, or orange car.
    //     if (square.contains(getYellowDumpSpan) || square.contains(getNavyDumpSpan) || square.contains(getPurpleDumpSpan)) {
    //         console.log('here!@#$T$')
    //     } else {
    //         dragDrop()
    //     }
    // })

    function dragDrop() {
        // console.log('hit', isSquareFilled(this.id))
        // if (isMoveValid(this.id)) {
        //     alert("Invalid Move! Start Over")
        //     return resetBoard()
        // }
        // if (this.id && isSquareFilled(this.id)) {
        //     alert("Invalid Move! Start Over")
        //     return resetBoard()
        // }
        this.className = 'filled'
        this.append(whichCar)
        console.log('drop')
        count += 1
        // console.log("dragDrop function", dragDrop())
        document.getElementById("countMoves").innerText = count
    }

    // =======================LIMIT MOVES===========================


    function isMoveValid(id) {
        // console.log("ismovevalid", id)
        // console.log('isMove', whichCar)

        // if whichCar === green car and id.includes("r2") return true else false

        if (whichCar === getGreenCarSpan && id.includes('r2') && !id.includes('c7')) {
            return true
        } else if
            (whichCar === getPurpleDumpSpan && id.includes('c2') && !id.includes('r6') && !id.includes('r7')) {
            return true
        } else if
            (whichCar === getOrangeCarSpan && id.includes('c2') && !id.includes('r7')) {
            return true
        } else if
            (whichCar === getRedCarSpan && id.includes('r4')) {
            return true
        } else if
            (whichCar === getTealDumpSpan && id.includes('r7') && !id.includes('c6') && !id.includes('c7')) {
            return true
        } else if
            (whichCar === getNavyDumpSpan && id.includes('c5') && !id.includes('r6') && !id.includes('r7')) {
            return true
        } else if
            (whichCar === getYellowDumpSpan && id.includes('c7') && !id.includes('r6') && !id.includes('r7')) {
            return true
        } else if
            (whichCar === getLightBlueCarSpan && id.includes('r6') && !id.includes('c7')) {
            return true
        }
        else {
            return false
        }

    }
})

console.log("purpDump info", getPurpleDumpSpan)


function isSquareFilled(id) {
    const square = document.getElementById(id)
    // console.log("id", id)
    // console.log('square', square)
    if (square.contains(getYellowDumpSpan) || square.contains(getNavyDumpSpan) || square.contains(getPurpleDumpSpan) || square.contains(getOrangeCarSpan) || square.contains(getRedCarSpan) || square.contains(getLightBlueCarSpan) || square.contains(getOrangeCarSpan)) {
        true
    } else {
        false
    }
}

const greenCarSquares = () => {
    if (r2c2.contains(getGreenCarSpan)) {
        r2c3.id = " nogo"
    } else if
        (r2c3.contains(getGreenCarSpan)) {
        r2c4.id = " nogo"
    } else if
        (r2c4.contains(getGreenCarSpan)) {
        r2c5.id = " nogo"
    } else if
        (r2c5.contains(getGreenCarSpan)) {
        r2c5.id = " nogo"
    } else if
        (r2c6.contains(getGreenCarSpan)) {
        r2c7.id = " nogo"
    }
}

const purpleDumpSquares = () => {
    if (r3c2.contains(getPurpleDumpSpan)) {
        r4c2.className = " nogo"
        r5c2.className = " nogo"
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
}

// ==================RESET=================================

const resetBoard = () => {
    r2c2.appendChild(getGreenCarSpan)
    r3c2.appendChild(getPurpleDumpSpan)
    r6c2.appendChild(getOrangeCarSpan)
    r4c3.appendChild(getRedCarSpan)
    r3c5.appendChild(getNavyDumpSpan)
    r2c7.appendChild(getYellowDumpSpan)
    r6c6.appendChild(getLightBlueCarSpan)
    r7c4.appendChild(getTealDumpSpan)
    count = 0
    document.getElementById("countMoves").innerText = count
    winner.innerText = ""
}
//  ==================RESET BUTTON==================================
document.getElementById('reset').addEventListener('click', () => {
    resetBoard()
})

// =======================BUTTON STYLE==============================

reset.addEventListener('mouseover', function () {
    reset.style.color = 'gray';
})
reset.addEventListener('mouseout', function () {
    reset.style.color = 'white';
})

start.addEventListener('mouseover', function () {
    start.style.color = 'gray';
})
start.addEventListener('mouseout', function () {
    start.style.color = 'white';
})