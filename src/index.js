
// Array of prizes behind doors.
    let prizeArray = ['Car', 'Goat', 'Goat'];

// Object recording users wins and losses.
    let winsLossesCounter = {
        Wins: 0,
        Losses: 0,
    }

// Selected global elements. 
    const startGameButton = document.querySelector("button");
    let winsLossesCounterDisplay = document.querySelector("#win-lose-counter-display");
    const consoleOutput = document.querySelector("#console-output");


// Event listeners.
    startGameButton.addEventListener("click", startGame);

    // const state = {
    //     grid: Array(3).fill(''),
    //     currentColumn: 0,
    // } 


// Function to draw doors that will contain prizes as their text content. 
    function drawDoor(container, column, prize = '') {
        const door = document.createElement('div');
        door.className = 'door';
        door.id = `door${column}`;
        const doorParagraph = document.createElement('p');
        doorParagraph.className = 'door-paragraph';
        doorParagraph.id = `door-paragraph${column}`;
        door.appendChild(doorParagraph);
        doorParagraph.textContent = prize;

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

        populateStorage();

        consoleOutput.textContent = "";

        drawGrid(game);
    }

// Function to randomise the prize behind the door.
    function prizeArrayShuffler() {
        let shuffledPrizeArray = prizeArray.sort(() => Math.random() - .5)
        return shuffledPrizeArray
    }

// Function for user to start the game.
    function startGame() {

// Selected function scoped elements.
        const doors = document.querySelectorAll(".door");
        const doorParagraph0 = document.querySelector("#door-paragraph0");
        const doorParagraph1 = document.querySelector("#door-paragraph1");
        const doorParagraph2 = document.querySelector("#door-paragraph2");
        const doorParagraphs = document.querySelectorAll(".door-paragraph");

// Remove classes if added from previous game.
        doors.forEach(element => {
            element.classList.remove("users-door", "not-users-door");
        });        

// Add a prize behind each door and hide them from the user.
        doorParagraph0.textContent = prizeArray[0];
        doorParagraph1.textContent = prizeArray[1];
        doorParagraph2.textContent = prizeArray[2];
        
        doorParagraphs.forEach(string => {
            string.style.visibility = "hidden";
        });

// Add a class of "goat" if the door has a goat behind it.
        doorParagraphs.forEach(element => {
            if (element.textContent === "Goat") {
                element.parentElement.classList.add("goat");
            }
        });

// Pick a random door for the user, change it's colour and render a message for the user.
        let randomDoorPicker = Math.floor(Math.random() * 3);
        const door0 = document.querySelector("#door0");
        const door1 = document.querySelector("#door1");
        const door2 = document.querySelector("#door2");

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
        
// Set the cadence of the game play and render messages letting the user know what is happening.
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
                winsLossesCounter.Wins ++;
            } else {
                consoleOutput.textContent = userLoseText.toUpperCase();
                winsLossesCounter.Losses ++;
            }

            let userWinTotal = winsLossesCounter.Wins;
            let userLoseTotal = winsLossesCounter.Losses;

            winsLossesCounterDisplay.textContent = `Won:${userWinTotal} Lost:${userLoseTotal}`;

            // localStorage.setItem('Won', `${userWinTotal}`);
            // localStorage.setItem('Lost', `${userLoseTotal}`);

            startGameButton.addEventListener("click", startGame);

        }, 9000); 

        startGameButton.removeEventListener("click", startGame);

    }

    loadPage();


