// Nonogram

// Global constants
const NUM_ROWS = 14;
const NUM_COLS = 18;

// Global variables
let gameSample = [];
let game = [];
let gameplay = true;


// Create an array to represent a minesweeper
let mine = createMinesweeper();

// Create divs to model the grid array
createDivGrid(mine);