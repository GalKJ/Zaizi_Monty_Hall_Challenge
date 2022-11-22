
// Function to create object in local storage if it doesn't exist and render it in the UI.
    function populateStorage(element) {

        localStorage.setItem('Won', '0')
        localStorage.setItem('Lost', '0')

        let wonTally = localStorage.getItem('Won');
        let lostTally = localStorage.getItem('Lost');

        element.textContent = `Won:${wonTally} Lost:${lostTally}`;
    }

// Function to get values from local storage and render them in the UI.
    function updateWinLoseCounterDisplay(element) {

        let wonTally = localStorage.getItem('Won');
        let lostTally = localStorage.getItem('Lost');
        
        element.textContent = `Won:${wonTally} Lost:${lostTally}`;
    }

