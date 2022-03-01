const board = document.querySelector('#imgContainer')
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
// ============================SPAN==================================
const getGreenCarSpan = document.querySelector('#greenCarSpan')
const getLightBlueCarSpan = document.querySelector('#lightBlueCarSpan')
const getNavyDumpSpan = document.querySelector('#navyDumpSpan')
const getOrangeCarSpan = document.querySelector('#orangeCarSpan')
const getPurpleDumpSpan = document.querySelector('#purpleDumpSpan')
const getRedCarSpan = document.querySelector('#redCarSpan')
const getTealDumpSpan = document.querySelector('#tealDumpSpan')
const getYellowDumpSpan = document.querySelector('#yellowDumpSpan')

// =========================START=================================
// this puts the cars on the board as the page loads 

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

// console.log(squares)
// added click start to break up the drag event
// served as a placeholder for trying to set up functions to declare other div's as filled as well
document.getElementById('start').addEventListener('click', () => {
    // dragover/dragenter/dragleave/dragdrop are all relevent to "empty squares"
    for (const empty of squares) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
        // console.log("empty the first", empty);
    }

    // ====================DRAGSTART===========================
    // dragstart & drag end are specific to each car
    getRedCarSpan.addEventListener('dragstart', function (e) {
        // console.log("red car start event", e);
        // console.log("this in red car start", this);
        this.className = 'filled'
        whichCar = getRedCarSpan
        dragStart()

    })
    getLightBlueCarSpan.addEventListener('dragstart', (e) => {
        // console.log("light blue car start event", e);
        this.className = 'filled'
        whichCar = getLightBlueCarSpan
        dragStart()
    })
    getNavyDumpSpan.addEventListener('dragstart', (e) => {
        // console.log("navy dump car start event", e);
        this.className = 'filled'
        whichCar = getNavyDumpSpan
        dragStart()
    })
    getYellowDumpSpan.addEventListener('dragstart', (e) => {
        // console.log("yellow dump start event", e);
        this.className = 'filled'
        whichCar = getYellowDumpSpan
        dragStart()
    })
    getGreenCarSpan.addEventListener('dragstart', (e) => {
        // console.log("green car start event", e);
        this.className = 'filled'
        whichCar = getGreenCarSpan
        dragStart()
    })
    getOrangeCarSpan.addEventListener('dragstart', (e) => {
        // console.log("orange car start event", e);
        this.className = 'filled'
        whichCar = getOrangeCarSpan
        dragStart()
    })
    getPurpleDumpSpan.addEventListener('dragstart', (e) => {
        // console.log("purple dumped car start event", e);
        this.className = 'filled'
        whichCar = getPurpleDumpSpan
        dragStart()
    })
    getTealDumpSpan.addEventListener('dragstart', (e) => {
        // console.log("teal dump start event", e);
        this.className = 'filled'
        whichCar = getTealDumpSpan
        dragStart()
    })
    // ===============DRAGEND=============================
    getRedCarSpan.addEventListener('dragend', (e) => {
        // console.log("red car end event", e);
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
    // ============================DRAG FUNCTIONS=============================
    function dragStart() {
        this.className += ' hold'
        setTimeout(() => this.className = 'invisible', 0)
        // console.log('start')
    }
    // called specifically in each car above
    function dragEnd() {
        // console.log('end')

    }

    // function for while car is hovering
    function dragOver(e) {

        if (!isMoveValid(this.id)) {
            this.className = " nogo"
        }
        if (isSquareFilled(this.id)) {
            this.className = " nogo"
        }
        e.preventDefault()
        // console.log("over");
    }

    function dragEnter(e) {

        e.preventDefault()
        // console.log("enter", e.target);
        this.className = " hovered"
    }

    function dragLeave() {
        this.className = ' empty'
        // console.log('leave');

    }


    // ==============================DRAGDROP===============================================

    function dragDrop() {
        // console.log('this in drag drop', this)
        this.className = 'filled'
        this.append(whichCar)
        // console.log('drop')
        // add count for each drop event
        count += 1
        // console.log("dragDrop function", dragDrop())
        document.getElementById("countMoves").innerText = count
    }

    // =======================LIMIT MOVES===========================


    function isMoveValid(id) {
        // console.log("ismovevalid", id)
        // console.log('isMove', whichCar)
        // for each car, validating move it its in it's original assigned row/column & moving in the same plane
        // adding the ! for out of bounse mose
        if (whichCar === getGreenCarSpan && id.includes('r2') && !id.includes('c7')) {
            // console.log("1 is move valid works!");
            return true
        } else if
            (whichCar === getPurpleDumpSpan && id.includes('c2') && !id.includes('r6') && !id.includes('r7')) {
            // console.log("2 is move valid works!")
            return true
        } else if
            (whichCar === getOrangeCarSpan && id.includes('c2') && !id.includes('r7')) {
            // console.log("3 is move valid works!")
            return true
        } else if
            (whichCar === getRedCarSpan && id.includes('r4')) {
            // console.log("4 is move valid works!")
            return true
        } else if
            (whichCar === getTealDumpSpan && id.includes('r7') && !id.includes('c6') && !id.includes('c7')) {
            // console.log("5 is move valid works!")
            return true
        } else if
            (whichCar === getNavyDumpSpan && id.includes('c5') && !id.includes('r6') && !id.includes('r7')) {
            // console.log("6 is move valid works!")
            return true
        } else if
            (whichCar === getYellowDumpSpan && id.includes('c7') && !id.includes('r6') && !id.includes('r7')) {
            // console.log("7 is move valid works!")
            return true
        } else if
            (whichCar === getLightBlueCarSpan && id.includes('r6') && !id.includes('c7')) {
            // console.log("8 is move valid works!")
            return true
        }
        else {
            // console.log("is move valid works FALSE!")
            return false

        }

    }
})

function isSquareFilled(id) {
    const square = document.getElementById(id)
    // console.log("id", id)
    // console.log('square', square)
    // this still only pulls where the car is assigned but could have more functionality if find a way to assign other divs to the cars
    if (square.contains(yellowDumpSpan) || square.contains(navyDumpSpan) || square.contains(purpleDumpSpan) || square.contains(orangeCarSpan) || square.contains(redCarSpan) || square.contains(lightBlueCarSpan) || square.contains(greenCarSpan) || square.contains(orangeCarSpan)) {
        // console.log("is square filled working TRUUUUUEEE");
        true
    } else {
        false
    }
}

// ==================RESET=================================
// reset button putting cars in original append & set count to 0
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