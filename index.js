// Zaizi Monty Hall index.js file


// The below function draws the doors that will contain prizes as their text content 
    function drawDoor(container, column, prize = '') {
        const door = document.createElement('div');
        door.className = 'door';
        door.id = `door${column}`;
        door.textContent = prize;

        container.appendChild(door);
        
        return door;
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
        drawGrid(game);
 
    }

    startGame();

