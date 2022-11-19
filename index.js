// Zaizi Monty Hall index.js file

// Array of prizes behind doors.
    let prizeArray = ['Car', 'Goat', 'Goat'];

    const state = {
        grid: Array(3).fill(''),
        currentColumn: 0,
    } 


// Function to draw doors that will contain prizes as their text content 
    function drawDoor(container, column, prize = '') {
        const door = document.createElement('div');
        door.className = 'door';
        door.id = `door${column}`;
        const doorParagraph = document.createElement('p');
        door.appendChild(doorParagraph);
        doorParagraph.textContent = prizeArray[column];
        doorParagraph.style.visibility = "hidden";

        container.appendChild(door);
        
        // return door;
    }

// Function to draw grid for doors.
    function drawGrid(container) {
        const grid = document.createElement('div');
        grid.className = 'grid';
    
        for (let i = 0; i < 3; i++) {
                drawDoor(grid, i)
                
            }
    
        container.appendChild(grid);
    }

// Function to begin the game and draw the UI.
    function startGame() {
        const game = document.querySelector("#game-container");
        
        prizeArray = prizeArrayShuffler();
        console.log(prizeArray);
        drawGrid(game);
    }

// Function to randomise the prize behind the door.
    function prizeArrayShuffler() {
        let shuffledPrizeArray = prizeArray.sort(() => Math.random() - .5)
        return shuffledPrizeArray
    }


    startGame();


