// Iteration 1 | Find the Maximum
//takes two numbers as arguments and returns the bigger number.
function maxOfTwoNumbers(a,b){
    // Forma simple
    // let result = a;
    // if (b>=a) result = b;
    // return result;

    // Forma con operador ternario
    return (b>=a) ? b : a;
}





// Iteration 2 | Find the Longest Word
//takes as an argument an array of words and returns the longest one. 
// If there are 2 with the same length, it should return the first occurrence.
//The function should return null if an empty array is passed as an argument.
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    //Forma Simple
    // let resultado;
    // if (words.length == 0) {
    //     return null;
    // }else{
    //     resultado = words[0]
    //     for (let i= 0; i<words.length;i++){
    //         if (words[i].length > resultado.length){
    //             resultado = words[i];
    //         }
    //     }
    //     return resultado;
    // }
    if (words.length === 0) return null;

    return words.reduce((longest, current) => {return current.length > longest.length ? current : longest;});

}




// Iteration 3 | Sum Numbers
// that takes an array of numbers as an argument and returns the sum of all the numbers in the array
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    //Forma Simple
    // let resultado = 0;
    // if (numbers.length === 0){
    //     resultado = 0
    // }else{
    //     for (let i=0; i<numbers.length;i++){
    //         resultado += numbers[i];
    //     }
    // }
    // return resultado;
    return numbers.reduce((a,b) => a + b, 0);
    

}




// Iteration 4 | Numbers Average
//Find the sum as we did in the first exercise (or how about reusing the function sumNumbers()?)
//Divide that sum by the number of elements in the array.
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    //Forma simple
    // let sumatorio = 0;
    // if (numbers2.length === 0){
    //     return 0;
    // }else{
    //     for (let i= 0; i<numbers2.length;i++){
    //         sumatorio += numbers2[i]
    //     }
    // }
    // return sumatorio/numbers2.length
    return numbers2.length === 0 ? 0 : numbers2.reduce((a,b) => a + b, 0) / numbers2.length;
}




// Iteration 5 | Find Elements
// will take in an array of words as one argument and a word to search for as the other.
// Return true if the word exists in the array; otherwise, return false.
// The function should return null if an empty array is passed as an argument.
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,word) {
    //Forma simple
    // console.log("La palabra es " + word);
    // let resultado = false;
    // if (words2.length === 0 || undefined){
    //     return null;
    // }else {
    //     for (let i=0; i<words2.length; i++){
    //         if (words2[i] === word){
    //             resultado = true;
    //         }
    //         console.log(words2[i]);
    //     }
    // }
    // return resultado;

    //Con Array's Methods
    let resultado = false;
    if (words2.length === 0 || undefined){
        return null;
    }else if (words2.includes(word)){
        resultado = true;  
    }
    return resultado;

}
