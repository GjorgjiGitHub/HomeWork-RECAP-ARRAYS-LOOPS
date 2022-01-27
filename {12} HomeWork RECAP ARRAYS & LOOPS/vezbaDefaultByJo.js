console.log("***HOMEWORK RECAP ARRAYS & LOOPS***");


let myMovies = ["Rush Hour", 10, "The Lion King", false, null, 1505];

// --------------------------------------------------------------------------------------------

// // vaka go printam sekoj element od nizata / bez razlika kakov mu e type-ot na elementot
// function printEachElement(array) {
//     for(let eachElement of array) {
//         console.log(eachElement);
//     }
// }
// printEachElement(myMovies);
// printEachElement([10, "ABC", "Dog", null]);

// --------------------------------------------------------------------------------------------

// // ovde treba da gi isprintam vo DOM samo elementite shto se so type string
// let divResult = document.getElementById("divResult");
// function printOnlyStrings(arrOfMovies) {
//     let onlyStrings = [];
//     for(let i = 0; i < arrOfMovies.length; i++) {
//         if(typeof arrOfMovies[i] == "string") {
//             onlyStrings.push(arrOfMovies[i])
//             divResult.innerText += `${arrOfMovies[i]}\n`;
//         }
//     }
//     return onlyStrings
// };
// let proba = printOnlyStrings(myMovies);
// console.log(proba);

// --------------------------------------------------------------------------------------------

// // ovde treba sekoj broj od nizata da bide pomnozen so vtoriot parametar
// function arrayPlusNumber(arrOfNumbers, number) {
//     let newArray = [];

//     for(let i = 0; i < arrOfNumbers.length; i++) {
//         if(typeof arrOfNumbers[i] == "number")
//         newArray.push(arrOfNumbers[i] * number);
//     } if(isNaN(number)){
//         return `Please provide a valid number as second parameter`
//     }
//     return newArray
// }

// console.log(arrayPlusNumber([10, "Gjorgje", false, 20, 30, "Dimitrov"], 3));
// console.log(arrayPlusNumber([10, "Gjorgje", 20, 30, "Dimitrov"], "TEST"));

// --------------------------------------------------------------------------------------------

// ovde treba da go dobieme zbirot od dvete nizi vo eden rezultat
// let arrayOnlyNumbers = [10, 10, 10];
// let arrayMixed = ["Gjorgji", "Cole", null, 10];

// function sumOfTwoArrays(array1, array2) {
//     let result1 = 0;
//     let result2 = 0;
//     for (let i = 0; i < array1.length; i++) {
//         if (typeof array1[i] === "number")
//             result1 += array1[i];
//     }
//     for (let i = 0; i < array2.length; i++) {
//         if (typeof array2[i] === "number")
//             result2 += array2[i];
//     }
//     return result1 + result2
// };
// let result = sumOfTwoArrays(arrayOnlyNumbers, arrayMixed);
// console.log(result);

// --------------------------------------------------------------------------------------------
















































































