const board = document.querySelector('#boardImage')
const lightBlueCar = document.querySelector('#lightBlueCar')
const navyDump = document.querySelector('#navyDump')
const greenCar = document.querySelector('#greenCar')
const orangeCar = document.querySelector('#orangeCar')
const purpleDump = document.querySelector('purpleDump')
const redCar = document.querySelector('redCar')
const tealDump = document.querySelector('#tealDump')
const yellowDump = document.querySelector('#yellowDump')
const reset = document.querySelector('#reset')
const allCars = document.querySelectorAll('.cars')
const squares = document.querySelectorAll('.squares')
let whichCar = ""
const r2c4 = document.querySelector('#r2c4')
let currentCar;

document.addEventListener('DOMContentLoaded', (event) => {
    // Loop over empty boxes
    // const draggable = [r2c2, r2c3, r2c4, r2c5, r2c6, r2c7, r3c2, r3c3, r3c4, r3c5, r3c6, r3c7, r4c2, r4c3, r4c4, r4c5, r4c6, r4c7, r5c2, r5c3, r5c4, r5c5, r5c6, r5c7, r6c2, r6c3, r6c4, r6c5, r6c6, r6c7, r7c2, r7c3, r7c4, r7c5, r7c6, r7c7,]
    for (const empty of squares) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }

    // lightBlueCar.addEventListener('dragstart', dragStart)
    // lightBlueCar.addEventListener('dragend', dragEnd)
    // lightBlueCar.addEventListener('mouseover', function () {
    //     reset.style.color = 'black'

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
    // redCar.addEventListener('dragstart', () => {
    //     whichCar = redCar
    //     dragStart()
    // })

    navyDump.addEventListener('dragend', () => {
        dragEnd()
    })
    lightBlueCar.addEventListener('dragend', () => {
        dragEnd()
    })

    yellowDump.addEventListener('dragend', () => {
        dragEnd()
    })
    // redCar.addEventListener('dragend', () => {
    //     dragEnd()
    // })

    // allCars.forEach(function (e) {
    //     for (let i = 0; i < allCars.length; i++) {
    //         whichCar = allCars[i]
    //         console.log("e", e)
    //     }
    //     whichCar.addEventListener('dragstart', dragStart)
    //     whichCar.addEventListener('dragend', dragEnd)
    // })
    // console.log("second log", whichCar);
    // on click, reset to whichCar

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

    }
})

// _____________________________________________________________________


// r2c4.addEventListener('mouseover', function () {
//     console.log("r2c4")
// })