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
        // maybe i want to have the door.textContent set to an empty string but reveal it to the user when the door and then last two doors are opened
        door.addEventListener('click', () => {
            // Where in the flow do i want to add the event listeners so that they work as needed?
        })
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


