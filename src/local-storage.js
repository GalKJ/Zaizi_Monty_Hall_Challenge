

    function populateStorage() {
        localStorage.setItem('Won', '0')
        localStorage.setItem('Lost', '0')
    }

    function updateWinLoseCounterDisplay(element) {
        let wonTally = localStorage.getItem('Won');
        let lostTally = localStorage.getItem('Lost');
        
        element.textContent = `Won:${wonTally} Lost:${lostTally}`;
    }

