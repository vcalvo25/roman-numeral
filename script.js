const form = document.getElementById("convertForm");
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", checkUserInput());

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

function checkUserInput() {
    let userInput = numberInput.value;
    if (userInput == ""){
        alert("Please enter a valid number.");
    } else if (userInput < 0) {
        alert("Please enter a number greater than or equal to 1.");
    } else if (userInput >= 4000) {
        alert("Please enter a number less than or equal to 3999.");
    } else {
        convertToRomanNumeral();
    }   
}

function convertToRomanNumeral(userInput) {
    const romanNumerals = {
        M: 1000, 
        CM: 900, 
        D: 500, 
        CD: 400, 
        C: 100, 
        XC: 90, 
        L: 50, 
        XL: 40, 
        X: 10, 
        IX: 9, 
        V: 5, 
        IV: 4, 
        I: 1,
    };

    let result = "";

    for (const key in romanNumerals) {
        while (userInput >= romanNumerals[key]) {
            result +=key;
            userInput -= romanNumerals[key];
        }
    }

    console.log(result);
}