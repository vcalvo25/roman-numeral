const form = document.getElementById("convertForm");
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const hideCon = document.querySelector(".hide");

convertBtn.addEventListener("click", checkUserInput);

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

function checkUserInput() {
    let userInput = numberInput.value;
    if (userInput == ""){
        output.innerHTML = `Please enter a valid number.`;
        output.className = "alert";
        hideCon.style.display = "block";
    } else if (userInput <= 1) {
        output.innerHTML = "Please enter a number greater than or equal to 1.";
        output.className = "alert";
        hideCon.style.display = "block";
    } else if (userInput >= 4000) {
        output.innerHTML = "Please enter a number less than or equal to 3999.";
        output.className = "alert";
        hideCon.style.display = "block";
    } else {
        const result = convertToRomanNumeral(userInput);
        hideCon.style.display = "block";
        output.innerHTML = result;
        output.className = "output-container";
    }   
}

function convertToRomanNumeral(numberInput) {
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
        I: 1
    };

    let result = '';

    for (let key in romanNumerals) {
        while (numberInput >= romanNumerals[key]) {
            result +=key;
            numberInput -= romanNumerals[key];   
        }
    }
    return result;
}


