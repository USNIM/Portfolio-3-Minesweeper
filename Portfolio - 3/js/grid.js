// Minesweeper functions

function createMinesweeper() {
    // Create and return a random Minesweeper
    for (let n = 0; n <= 251; n++) {
        gameSample.push(n);
    }
    for (let n = 1; n <= 212; n++) {
        gameSample.splice(Math.floor(Math.random() * gameSample.length), 1)
    } 
    for (let n = 1; n <= 252; n++) {
        game.push(0);
    }
    for (let n = 0; n <= 39; n++) {
        game[gameSample[n]] = "bomb";
    }
    return [ [game[0], game[1], game[2], game[3], game[4], game[5], game[6], game[7], game[8], game[9], game[10], game[11], game[12], game[13], game[14], game[15], game[16], game[17]], [game[18], game[19], game[20], game[21], game[22], game[23], game[24], game[25], game[26], game[27], game[28], game[29], game[30], game[31], game[32], game[33], game[34], game[35]], [game[36], game[37], game[38], game[39], game[40], game[41], game[42], game[43], game[44], game[45], game[46], game[47], game[48], game[49], game[50], game[51], game[52], game[53]], [game[54], game[55], game[56], game[57], game[58], game[59], game[60], game[61], game[62], game[63], game[64], game[65], game[66], game[67], game[68], game[69], game[70], game[71]], [game[72], game[73], game[74], game[75], game[76], game[77], game[78], game[79], game[80], game[81], game[82], game[83], game[84], game[85], game[86], game[87], game[88], game[89]], [game[90], game[91], game[92], game[93], game[94], game[95], game[96], game[97], game[98], game[99], game[100], game[101], game[102], game[103], game[104], game[105], game[106], game[107]], [game[108], game[109], game[110], game[111], game[112], game[113], game[114], game[115], game[116], game[117], game[118], game[119], game[120], game[121], game[122], game[123], game[124], game[125]], [game[126], game[127], game[128], game[129], game[130], game[131], game[132], game[133], game[134], game[135], game[136], game[137], game[138], game[139], game[140], game[141], game[142], game[143]], [game[144], game[145], game[146], game[147], game[148], game[149], game[150], game[151], game[152], game[153], game[154], game[155], game[156], game[157], game[158], game[159], game[160], game[161]], [game[162], game[163], game[164], game[165], game[166], game[167], game[168], game[169], game[170], game[171], game[172], game[173], game[174], game[175], game[176], game[177], game[178], game[179]], [game[180], game[181], game[182], game[183], game[184], game[185], game[186], game[187], game[188], game[189], game[190], game[191], game[192], game[193], game[194], game[195], game[196], game[197]], [game[198], game[199], game[200], game[201], game[202], game[203], game[204], game[205], game[206], game[207], game[208], game[209], game[210], game[211], game[212], game[213], game[214], game[215]], [game[216], game[217], game[218], game[219], game[220], game[221], game[222], game[223], game[224], game[225], game[226], game[227], game[228], game[229], game[230], game[231], game[232], game[233]], [game[234], game[235], game[236], game[237], game[238], game[239], game[240], game[241], game[242], game[243], game[244], game[245], game[246], game[247], game[248], game[249], game[250], game[251]] ]
}
  
function createDivGrid(mine) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            // Create a div for each element in 2D grid
            let divEl = document.createElement("div");

            divEl.classList.add("grey");

            // Add the number that indicate number of bomb around div
            if (mine[row][col] != "bomb") {
                if (row >= 1 && col >= 1) {
                    if (mine[row - 1][col - 1] == "bomb") {
                        mine[row][col]++;
                    }
                }
                if (row >= 1) {
                    if (mine[row - 1][col] == "bomb") {
                        mine[row][col]++;
                    }
                }
                if (row >= 1 && col <= 17) {
                    if (mine[row - 1][col + 1] == "bomb") {
                        mine[row][col]++;
                    }
                }
                if (col >= 1) {
                    if (mine[row][col - 1] == "bomb") {
                        mine[row][col]++;
                    }
                }
                if (col <= 17) {
                    if (mine[row][col + 1] == "bomb") {
                        mine[row][col]++;
                    }
                }
                if (row <= 12 && col >= 1) {
                    if (mine[row + 1][col - 1] == "bomb") {
                        mine[row][col]++;
                    }
                }
                if (row <= 12) {
                    if (mine[row + 1][col] == "bomb") {
                        mine[row][col]++;
                    }
                }
                if (row <= 12 && col <= 17) {
                    if (mine[row + 1][col + 1] == "bomb") {
                        mine[row][col]++;
                    }
                }
            }

            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;
        
            // Add an event listener to each divEl
            divEl.addEventListener("click", cellClicked);

            // Add id to each container
            divEl.setAttribute("id", row + "," + col)

            // Add div to container
            document.getElementById("container").append(divEl);
        }
    }
}

function cellClicked(event) {
    // Set the color of the clicked cell

    // Get row and col of the clicked cell
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;

    // Get value of option select element
    let option = document.getElementById("cell-option").value;

    if (gameplay) {
        if (event.target.classList == "grey" && option == "open") {
            if (mine[row][col] == "bomb") {
                event.target.classList.add("red")
                event.target.classList.remove("grey")
                gameplay = false;
            } else if (mine[row][col] == "0") {
                event.target.classList.add("white")
                event.target.classList.remove("grey")
                if (row >= 1 && col >= 1) {
                    document.getElementById((row - 1) + "," + (col - 1)).click();
                }
                if (row >= 1) {
                    document.getElementById((row - 1) + "," + col).click();
                }
                if (row >= 1 && col <= 16) {
                    document.getElementById((row - 1) + "," + (+col + 1)).click();
                }
                if (col >= 1) {
                    document.getElementById(row + "," + (col - 1)).click();
                }
                if (col <= 16) {
                    document.getElementById(row + "," + (+col + 1)).click();
                }
                if (row <= 12 && col >= 1) {
                    document.getElementById((+row + 1) + "," + (col - 1)).click();
                }
                if (row <= 12) {
                    document.getElementById((+row + 1) + "," + col).click();
                }
                if (row <= 12 && col <= 16) {
                    document.getElementById((+row + 1) + "," + (+col + 1)).click();
                } 
            } else {
                event.target.classList.add("white")
                event.target.classList.remove("grey")
                document.getElementById(row + "," + col).innerHTML = mine[row][col];
            }
        } else if (event.target.classList == "grey" && option == "flag") {
            event.target.classList.add("green")
            event.target.classList.remove("grey")
        } else if (event.target.classList == "green") {
            event.target.classList.add("grey")
            event.target.classList.remove("green")
        }
    }
}
