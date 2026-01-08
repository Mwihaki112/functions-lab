function calculateTax(amount){
    return amount * 0.10;
}
function convertToUpperCase(text){
    return text.toUpperCase();
}
function findMaximum(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}


function isPalindrome(word){
    const original = word.toLowerCase();
    const reversed = original.split("").reverse().join("");

    return original === reversed;
}



function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discount = originalPrice * discountPercentage;  
    return originalPrice - discount;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };



findMaximum(167, 980);
console.log(isPalindrome("Level"));
