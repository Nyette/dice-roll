document.addEventListener("DOMContentLoaded", function() {
    
    function generateRandomInt(max) {
        let randomInt = Math.floor(Math.random() * max) + 1;
        return randomInt;
    }

    // Generate random numbers
    let randomInt1 = generateRandomInt(6);
    let randomInt2 = generateRandomInt(6);
    // console.log(randomInt1, randomInt2);
    
    // Change the dice images
    document.querySelector(".img1").src = `images/dice${randomInt1}.png`;
    document.querySelector(".img2").src = `images/dice${randomInt2}.png`;

    function handleResult(randomInt1, randomInt2) {
        let h1 = document.querySelector("h1");
        if (randomInt1 === randomInt2) {
            h1.textContent = "Tie!";
        } else if (randomInt1 < randomInt2) {
            h1.textContent = "Player 2 Wins!";
        } else {
            h1.textContent = "Player 1 Wins!";
        }
    }

    handleResult(randomInt1, randomInt2);

})