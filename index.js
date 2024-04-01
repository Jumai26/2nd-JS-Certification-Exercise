const inputDisplay = document.getElementById('input-display');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const errorMessage = document.getElementById('error-message')

result.style.display = 'none';

function conversion(number) {

    if (inputDisplay.value < 1) {
        errorMessage.innerText = "Input a valid number"
        result.innerHTML = "-";
    } 
    
    romanNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    arabicNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let roman = "";

    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i]) {
            roman += arabicNumerals[i];
            number -= romanNumerals[i];
        }
    }
    return roman;
};

btn.addEventListener('click', () => {
    const input = parseInt(inputDisplay.value);
    const romanNumeral = conversion(input);
    result.style.display = 'block';
    result.textContent = `${inputDisplay.value} is ${romanNumeral}`;
});
