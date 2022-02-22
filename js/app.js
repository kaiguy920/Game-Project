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
let whichCar = ""
const winner = document.querySelector('#winner')
let currentCar;
let count = 0;
const r4c8 = document.querySelector('#r4c8')
const countMoves = document.getElementById('countMoves')
// ==========================LEVEL 1 BOARD========================
// **maybe have the cars just displayed on the page, have a start button
const getGreenCar = document.getElementById('greenCar')
const getLightBlueCar = document.getElementById('lightBlueCar')
const getNavyDump = document.getElementById('navyDump')
const getOrangeCar = document.getElementById('orangeCar')
const getPurpleDump = document.getElementById('purpleDump')
const getRedCar = document.getElementById('redCar')
const getTealDump = document.getElementById('#ealDump')
const getYellowDump = document.getElementById('yellowDump')
const r2c2 = document.getElementById('r2c2')
const r3c2 = document.getElementById("r3c2")
const r6c2 = document.getElementById("r6c2")
const r4c3 = document.getElementById('r4c3')
const r3c5 = document.getElementById('r3c5')
const r2c7 = document.getElementById("r2c7")
const r6c6 = document.getElementById("r6c6")
const r7c4 = document.getElementById('r7c4')

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
    r2c2.appendChild(greenCar)
    r3c2.appendChild(purpleDump)
    r6c2.appendChild(orangeCar)
    r4c3.appendChild(redCar)
    r3c5.appendChild(navyDump)
    r2c7.appendChild(yellowDump)
    r6c6.appendChild(lightBlueCar)
    r7c4.appendChild(tealDump)
})

document.getElementById('start').addEventListener('click', () => {

    for (const empty of squares) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
        console.log(empty);
    }
    // ====================DRAGSTART===========================
    redCar.addEventListener('dragstart', () => {
        whichCar = redCar
        dragStart()
    })
    lightBlueCar.addEventListener('dragstart', () => {
        whichCar = lightBlueCar
        dragStart()
    })
    navyDump.addEventListener('dragstart', () => {
        whichCar = navyDump
        dragStart()
    })
    yellowDump.addEventListener('dragstart', () => {
        whichCar = yellowDump
        dragStart()
    })
    greenCar.addEventListener('dragstart', () => {
        whichCar = greenCar
        dragStart()
    })
    orangeCar.addEventListener('dragstart', () => {
        whichCar = orangeCar
        dragStart()
    })
    purpleDump.addEventListener('dragstart', () => {
        whichCar = purpleDump
        dragStart()
    })
    tealDump.addEventListener('dragstart', () => {
        whichCar = tealDump
        dragStart()
    })
    // ===============DRAGEND=============================
    redCar.addEventListener('dragend', () => {
        dragEnd()
    })
    navyDump.addEventListener('dragend', () => {
        dragEnd()
    })
    lightBlueCar.addEventListener('dragend', () => {
        dragEnd()
    })

    yellowDump.addEventListener('dragend', () => {
        dragEnd()
    })
    greenCar.addEventListener('dragend', () => {
        dragEnd()
    })
    orangeCar.addEventListener('dragend', () => {
        dragEnd()
    })
    purpleDump.addEventListener('dragend', () => {
        dragEnd()
    })
    tealDump.addEventListener('dragend', () => {
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
        console.log("over");
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

    function dragDrop() {
        this.className = 'empty'
        this.append(whichCar)
        console.log('drop')
        count += 1
        console.log("count", count)
        document.getElementById("countMoves").innerText = count
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
    r2c2.appendChild(greenCar)
    r3c2.appendChild(purpleDump)
    r6c2.appendChild(orangeCar)
    r4c3.appendChild(redCar)
    r3c5.appendChild(navyDump)
    r2c7.appendChild(yellowDump)
    r6c6.appendChild(lightBlueCar)
    r7c4.appendChild(tealDump)
    count = 0
    document.getElementById("countMoves").innerText = count
})

    // =======================LIMIT MOVES===========================
    // const yellowDumpMoves = () => {

    // }


// =======================MOVE COUNT==============================
// let count = 0
// const moveCount = () => {
//     whichCar.addEventListener("drop", function () {
//         count += 1;
//         console.log("count", count)
//     })
// }

