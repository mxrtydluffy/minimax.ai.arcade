import gameBoard from './minimax'
const board = [['_','_','_'], ['_','_','_'], ['_','_','_']]
let newBoard = new gameBoard(board)
console.log(newBoard)

// Winner can either be user or AI 
let winner = ('#winner');

// Declare slots by id
let one = ('#one');
let two = ('#two');
let three = ('#three');
let four = ('#four');
let five = ('#five');
let six = ('#six');
let seven = ('#seven');
let eight = ('#eight');
let nine = ('#nine');

let box = ('.box');
let openBox = ('#.availible');
let reset = ('#reset');

// Look for object
const search = {
    one: {i: 0, j: 0},
    two: {i: 0, j: 1},
    three: {i: 0, j: 2},
    four: {i: 1, j: 0},
    five: {i: 1, j: 1},
    six: {i: 1, j: 2},
    seven: {i: 2, j: 0},
    eight: {i: 2, j: 1},
    nine: {i: 2, j: 2}
}

const lookUp = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: seven,
    8: eight,
    9: nine
}

// Available moves
let moves = [one, two, three, four, five, six, seven, eight, nine]

// Player move when clicks mouse. | Displays color
box.on('mouseclick', function(event){
    if((event.currentTarget).hasClass('available') == true){
        (event.currentTarget).addClass('player1');
    } else {
        (event.currentTarget).addClass('unavailable');
    }
})

// After a click | Displays another color
box.on('mouseleave', function(event){
    (event.currentTarget).removeClass('player1 unavaliable');
})

// Will put X on available spots.
box.on('click', function(event){
    if(event.currentTarget).hasClass('available') == true){
    (event.currentTarget).html('X');
    (event.currentTarget).addClass('player1clicked');
    (event.currentTarget).removeClass('available');
    }
}) 