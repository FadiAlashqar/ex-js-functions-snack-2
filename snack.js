// SNACK 1
// function somma(num1, num2) {
//     return num1 + num2
// };

// const numSum = somma(2, 2);
// console.log(numSum);

// SNACK 1.2
// const somma = function (num1, num2) {
//     return num1 + num2
// };

// console.log(somma(2, 5));

// SNACK 1.3

// const somma = (num1, num2) => num1 + num2;
// console.log(somma(3, 2));

// SNACK 2
// const quadrato = (num) => num * num;
// console.log(`Il tuo risultato è ${quadrato(5)}`);

// SNACK 3
// const divisione = (a, b) => a / b
// const eseguiOperazione = (a, b, callback) => callback(a, b);

// console.log(eseguiOperazione(6, 2, divisione));

// SNACK 4
// function creaTimer(time) {
//     return function () {
//         setTimeout(() => { (console.log("Tempo scaduto!")) }, time)
//     }
// };

// const tempo = creaTimer(4000);

// tempo();

// SNACK 5
// function stampaOgniSecondo(message) {
//     const interval = setInterval(() => {
//         console.log(message)
//     }, 1000)
//     return interval
// }

// const interval = stampaOgniSecondo("ciao");

// setTimeout(() => { clearInterval(interval) }, 5000);

// SNACK 6
// function creaContatoreAutomatico(time, num) {
//     return function () {
//         const interval = setInterval(() => {
//             console.log(num++)
//         }, time)
//         return interval
//     }
// };

// const interval = creaContatoreAutomatico(1000, 1)();
// setTimeout(() => { clearInterval(interval) }, 10000);

// SNACK 7
// function eseguiEferma(message, start, stop) {
//     let interval;
//     setTimeout(() => {
//         interval = setInterval(() => {
//             console.log(message)
//         }, 1000)
//     }, start)
//     setTimeout(() => {
//         clearInterval(interval)
//     }, stop)

// }

// eseguiEferma("ciao", 4000, 20000);

// SNACK 8 
// function contoAllaRovescia(n) {
//     let count;
//     return count = setInterval(() => {
//         console.log(n--)
//         if (n === 0) {
//             console.log("Tempo scaduto!")
//         }
//     }, 1000)
// };
// const count = contoAllaRovescia(10);

// SNACK 9
const exampleArray = ["camminare", "correre", "passeggiare"]
function sequenzaOperazioni(array) {
    let i = 0

    const interval = setInterval(() => {
        console.log(array[i]);
        i++;
        if (i > array.length - 1) {
            clearInterval(interval);
            console.log("Operazioni terminate");
        }
    }, 2000)
}
sequenzaOperazioni(exampleArray)
