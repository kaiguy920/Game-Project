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
// **maybe have the cars just displayed on the page, have a start button
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

console.log(getYellowDumpSpan, getGreenCarSpan)

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
    r2c2.appendChild(getGreenCar)
    r3c2.appendChild(getPurpleDump)
    r6c2.appendChild(getOrangeCar)
    r4c3.appendChild(getRedCar)
    r3c5.appendChild(getNavyDump)
    r2c7.appendChild(getYellowDump)
    r6c6.appendChild(getLightBlueCar)
    r7c4.appendChild(getTealDump)
})


document.getElementById('start').addEventListener('click', () => {


    // const redCarMoves = () => {
    //     if (r4c3.className === "filled")
    //         return r4c4.className = "filled"
    //     console.log(r4c4.className)
    // }
    // const emptySquaresAtStart = [r2c2, r2c3, r2c6, r3c3, r3c4, r3c6, r4c6, r4c8, r5c3, r5c4, r5c6, r5c7, r6c3, r6c4, r6c5, r7c3, r7c7] = () => {
    //     emptySquaresAtStart.className = "empty"
    // ===================ASSIGNING "EMPTY SQUARES"=========================
    for (const empty of squares) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
        // console.log("empty the first", empty);
    }


    // const emptySquares = () => {
    //     for (let i = 0; i < squares.length; i++) {
    //         if (squares[i].className !== "filled") {
    //             squares[i].addEventListener('dragover', dragOver);
    //             squares[i].addEventListener('dragenter', dragEnter);
    //             squares[i].addEventListener('dragleave', dragLeave);
    //             squares[i].addEventListener('drop', dragDrop);
    //         }
    //     }
    // }
    // ====================DRAGSTART===========================
    getRedCarSpan.addEventListener('dragstart', () => {
        this.className = 'filled'
        whichCar = getRedCarSpan
        dragStart()
        console.log("hellooo", empty);
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

    function dragStart() {
        this.className += ' hold'
        setTimeout(() => this.className = 'invisible', 0)
        console.log('start')

    }

    function dragEnd() {
        console.log('end')
    }


    function dragOver(e) {
        e.preventDefault()
        this.className += " hovered"
        console.log("over");

    }

    function dragEnter(e) {
        e.preventDefault()
        // this.className += " hovered"
        console.log("enter");
    }

    function dragLeave() {
        this.className = 'empty'
        console.log('leave');
    }
    // ==============================DRAGDROP===============================================

    // getRedCarSpan.addEventListener('dragdrop', () => {
    //     if (getRedCarSpan.document.dragDrop(r4c8)) {
    //         console.log("you win!!")
    //     } else {
    //         dragDrop()
    //     }
    // })
    // getNavyDumpSpan.addEventListener('dragdrop', () => {
    //     dragDrop()
    // })
    // getLightBlueCarSpan.addEventListener('dragdrop', () => {
    //     dragDrop()
    // })

    // getYellowDumpSpan.addEventListener('dragdrop', () => {
    //     dragDrop()
    // })
    // getGreenCarSpan.addEventListener('dragdrop', () => {
    //     dragDrop()
    // })
    // getOrangeCarSpan.addEventListener('dragdrop', () => {
    //     dragDrop()
    // })
    // getPurpleDumpSpan.addEventListener('dragdrop', () => {
    //     dragDrop()
    // })
    // getTealDumpSpan.addEventListener('dragdrop', () => {
    //     dragDrop()
    // })
    function dragDrop() {
        if (this.className === 'filled') {
            return dragStart()
        } else {
            this.className = 'filled'
            this.classList.remove("empty")
            this.append(whichCar)
            console.log('drop')
        }
        count += 1
        console.log("count", count)
        document.getElementById("countMoves").innerText = count
        console.log(this);
        // detectWin()
    }
})

// ==================DETECT WIN=================================

// const win = () => {
//     if (r4c8.contains(redCar))
//         document.append.winner.innerText = "You steared through that one!"
// }


// function detectWin() {
//     if (redCar == document.body.imageContainer.r4c8) {
//         // winner.innerText = "You steared through that one!"
//         alert("You did it!!")
//     }
// }


// add event listener to r4c8
// document.addEventListener('drop', function () {
//     if (redCar.target.classId == r4c8) {
//         winner.innerText = "You steared through that one!"
//     }
// })


//  ==================RESET==================================
document.getElementById('reset').addEventListener('click', () => {
    r2c2.appendChild(getGreenCar)
    r3c2.appendChild(getPurpleDump)
    r6c2.appendChild(getOrangeCar)
    r4c3.appendChild(getRedCar)
    r3c5.appendChild(getNavyDump)
    r2c7.appendChild(getYellowDump)
    r6c6.appendChild(getLightBlueCar)
    r7c4.appendChild(getTealDump)
    count = 0
    document.getElementById("countMoves").innerText = count
})

// =======================LIMIT MOVES===========================
// const yellowDumpMoves = () => {
//     // can only play on column 7, between row 2-5
//     if (getYellowDumpSpan)



// =======================MOVE COUNT==============================
// let count = 0
// const moveCount = () => {
//     whichCar.addEventListener("drop", function () {
//         count += 1;
//         console.log("count", count)
//     })
// }

