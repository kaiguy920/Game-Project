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
// build array of nodes to span 
if (getYellowDumpSpan.parentElement.id.includes("r2c7")) {
    getYellowDumpSpan.parentElement.id.push("r3c7")
    getYellowDumpSpan.parentElement.id.push("r4c7")
}

console.log("yellow dump", getYellowDumpSpan.parentElement.id)

const squareArray = [r2c2, r2c3, r2c4, r2c5, r2c6, r2c7, r3c2, r3c3, r3c4, r3c5, r3c6, r3c7, r4c2, r4c3, r4c4, r4c5, r4c6, r4c7, r5c2, r5c3, r5c4, r5c5, r5c6, r5c7, r6c2, r6c3, r6c4, r6c5, r6c6, r6c7, r7c2, r7c3, r7c4, r7c5, r7c6, r7c7]
const unavailableSquares = []
const availableSquares = []
const oldYellur = []
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

// console.log(squares)
document.getElementById('start').addEventListener('click', () => {

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
    // for (const empty of availableSquares) {
    for (const empty of squares) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
        // console.log("empty the first", empty);
    }

    // ====================DRAGSTART===========================

    getRedCarSpan.addEventListener('dragstart', function (e) {
        console.log("red car start event", e);
        console.log("this in red car start", this);
        // assigning class name to red car as filled to prevent over drag/drop events to happen there
        this.className = 'filled'
        whichCar = getRedCarSpan
        dragStart()

    })
    getLightBlueCarSpan.addEventListener('dragstart', (e) => {
        console.log("light blue car start event", e);
        this.className = 'filled'
        whichCar = getLightBlueCarSpan
        dragStart()
    })
    getNavyDumpSpan.addEventListener('dragstart', (e) => {
        console.log("navy dump car start event", e);
        this.className = 'filled'
        whichCar = getNavyDumpSpan
        dragStart()
    })
    getYellowDumpSpan.addEventListener('dragstart', (e) => {
        console.log("yellow dump start event", e);
        this.className = 'filled'
        whichCar = getYellowDumpSpan
        dragStart()
    })
    getGreenCarSpan.addEventListener('dragstart', (e) => {
        console.log("green car start event", e);
        this.className = 'filled'
        whichCar = getGreenCarSpan
        dragStart()
    })
    getOrangeCarSpan.addEventListener('dragstart', (e) => {
        console.log("orange car start event", e);
        this.className = 'filled'
        whichCar = getOrangeCarSpan
        dragStart()
    })
    getPurpleDumpSpan.addEventListener('dragstart', (e) => {
        console.log("purple dumped car start event", e);
        this.className = 'filled'
        whichCar = getPurpleDumpSpan
        dragStart()
    })
    getTealDumpSpan.addEventListener('dragstart', (e) => {
        console.log("teal dump start event", e);
        this.className = 'filled'
        whichCar = getTealDumpSpan
        dragStart()
    })
    // ===============DRAGEND=============================
    getRedCarSpan.addEventListener('dragend', (e) => {
        console.log("red car end event", e);
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
        console.log('start')

    }

    function dragEnd() {
        console.log('end')

    }

    // function to get id & add 1 to it 
    // invoke in dragOver
    // redCar id
    // const getElementId = (e) => {
    //     e.getElement.id[3] = getRedCarSpan.toElement.id += 1
    // }
    // console.log("red car firstChild:", getRedCarSpan.firstChild)

    function dragOver(e) {
        // get last element of string of e.toElement.id & add 1 to it
        // console.log("dragover event", e)
        // change 3 to a num to be able to add 1  += 1

        // Number(e.toElement.id[3]) += 1
        // this.nextElementSibling.className = " nogo"

        if (!isMoveValid(this.id)) {
            this.className = " nogo"
        }
        if (isSquareFilled(this.id)) {
            this.className = " nogo"
        }
        purpleDumpSquares()


        e.preventDefault()
        // console.log("over");
    }

    function dragEnter(e) {

        e.preventDefault()
        console.log("enter", e.target);
        this.className = " hovered"
    }

    function dragLeave() {
        this.className = ' empty'
        console.log('leave');

    }


    // ==============================DRAGDROP===============================================

    function dragDrop() {
        console.log('this in drag drop', this)
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

        if (whichCar === getGreenCarSpan && id.includes('r2') && !id.includes('c7')) {
            console.log("1 is move valid works!");
            return true
        } else if
            (whichCar === getPurpleDumpSpan && id.includes('c2') && !id.includes('r6') && !id.includes('r7')) {
            console.log("2 is move valid works!")
            return true
        } else if
            (whichCar === getOrangeCarSpan && id.includes('c2') && !id.includes('r7')) {
            console.log("3 is move valid works!")
            return true
        } else if
            (whichCar === getRedCarSpan && id.includes('r4')) {
            // red car move validator needs to check the div next to the target
            console.log("4 is move valid works!")
            return true
        } else if
            (whichCar === getTealDumpSpan && id.includes('r7') && !id.includes('c6') && !id.includes('c7')) {
            console.log("5 is move valid works!")
            return true
        } else if
            (whichCar === getNavyDumpSpan && id.includes('c5') && !id.includes('r6') && !id.includes('r7')) {
            console.log("6 is move valid works!")
            return true
        } else if
            (whichCar === getYellowDumpSpan && id.includes('c7') && !id.includes('r6') && !id.includes('r7')) {
            console.log("7 is move valid works!")
            return true
        } else if
            (whichCar === getLightBlueCarSpan && id.includes('r6') && !id.includes('c7')) {
            console.log("8 is move valid works!")
            return true
        }
        else {
            console.log("is move valid works FALSE!")
            return false

        }

    }
})

console.log("r2c2", r2c2)
function isSquareFilled(id) {
    const square = document.getElementById(id)
    // console.log("square const, line 347", square)
    console.log("r2c2", r2c2);;
    // console.log("id", id)
    // console.log('square', square)
    if (square.contains(yellowDumpSpan) || square.contains(navyDumpSpan) || square.contains(purpleDumpSpan) || square.contains(orangeCarSpan) || square.contains(redCarSpan) || square.contains(lightBlueCarSpan) || square.contains(greenCarSpan) || square.contains(orangeCarSpan)) {
        // console.log("is square filled working TRUUUUUEEE");
        true
        // } else if
        //     (squares.className = "filled") {
        //     true
    } else {
        false
    }
}

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