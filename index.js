// Zaizi Monty Hall index.js file


// The below function draws the doors that will contain prizes as their text content 
    function drawDoor(container, column, prize = '') {
        const door = document.createElement('div');
        door.className = 'door';
        door.id = `door${column}`;
        door.textContent = letter;

        container.appendChild(door);
        
        return door;
    }

