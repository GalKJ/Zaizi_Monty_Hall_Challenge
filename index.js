// Zaizi Monty Hall index.js file

// Selected elements 
const startGameButton = document.querySelector("button");
let winsLossesCounterDisplay = document.querySelector("#win-lose-counter-display");

// Event listeners
startGameButton.addEventListener("click", startGame);

// Array of prizes behind doors.
    let prizeArray = ['Car', 'Goat', 'Goat'];

// Object recording users wins and losses.
    let winsLossesCounter = {
        Wins: 0,
        Losses: 0,
    }

    // const state = {
    //     grid: Array(3).fill(''),
    //     currentColumn: 0,
    // } 


// Function to draw doors that will contain prizes as their text content 
    function drawDoor(container, column, prize = '') {
        const door = document.createElement('div');
        door.className = 'door';
        door.id = `door${column}`;
        const doorParagraph = document.createElement('p');
        door.appendChild(doorParagraph);
        doorParagraph.textContent = prizeArray[column];
        doorParagraph.style.visibility = "hidden";

        if (doorParagraph.textContent === "Goat") {
            door.classList.add("goat");
        }

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

// Function to load the page and draw the UI.
    function loadPage() {
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

// Function for user to start the game
    function startGame() {
        let randomDoorPicker = Math.floor(Math.random() * 3);
        const door0 = document.querySelector("#door0");
        const door1 = document.querySelector("#door1");
        const door2 = document.querySelector("#door2");
        const consoleOutput = document.querySelector("#console-output");

        switch (randomDoorPicker) {
            case 0:
                door0.classList.add("users-door");
                door1.classList.add("not-users-door");
                door2.classList.add("not-users-door");
                consoleOutput.textContent = "User picked a door!";
                break;
            case 1:
                door1.classList.add("users-door");
                door0.classList.add("not-users-door");
                door2.classList.add("not-users-door");
                consoleOutput.textContent = "User picked a door!";
                break;
            case 2:
                door2.classList.add("users-door");
                door1.classList.add("not-users-door");
                door0.classList.add("not-users-door");
                consoleOutput.textContent = "User picked a door!";
                break;
            default:
                break;
        }

        const goatRevealDoor = document.querySelector(".goat.not-users-door");
        const usersDoor = document.querySelector(".users-door");
        const lastDoor = document.querySelectorAll(".not-users-door");
        const userWinText = "User wins!";
        const userLoseText = "User loses!";
        
        setTimeout(() => {
            goatRevealDoor.children[0].style.visibility = "visible";
            consoleOutput.textContent = "";
        }, 2000);

        setTimeout(() => {
            consoleOutput.textContent = "The Goat booby prize was revealed!";
        }, 2500);
        
        setTimeout(() => {
            consoleOutput.textContent = "";
        }, 5000);
        
        setTimeout(() => {
            consoleOutput.textContent = "The User chooses to stick with their initial door!";
        }, 5500);
        
        setTimeout(() => {
            
            lastDoor.forEach(door => {
                door.children[0].style.visibility = "visible";
            
            });

            usersDoor.children[0].style.visibility = "visible";
            
            if (usersDoor.children[0].textContent === 'Car') {
                consoleOutput.textContent = userWinText.toUpperCase();
                winsLossesCounter.Wins += 1;
            } else {
                consoleOutput.textContent = userLoseText.toUpperCase();
                winsLossesCounter.Losses += 1;
            }
        }, 9000); 

        





        startGameButton.removeEventListener("click", startGame);

    }

    loadPage();


