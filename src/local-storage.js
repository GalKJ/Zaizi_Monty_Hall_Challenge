

    function populateStorage(element) {

        localStorage.setItem('Won', '0')
        localStorage.setItem('Lost', '0')

        let wonTally = localStorage.getItem('Won');
        let lostTally = localStorage.getItem('Lost');

        // if (wonTally && lostTally === '0') {
            
        // }
        element.textContent = `Won:${wonTally} Lost:${lostTally}`;
        
    }

    function updateWinLoseCounterDisplay(element) {

        let wonTally = localStorage.getItem('Won');
        let lostTally = localStorage.getItem('Lost');
        
        element.textContent = `Won:${wonTally} Lost:${lostTally}`;
    }

