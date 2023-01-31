/* Minha forma de fazer!

let a = 7;
let b = 94;

console.log("O valor de A é: " + a);
console.log("O valor de B é: " + b);

// depois da troca... a = 94 e b = 7

a = 94;
b = 7;

console.log("O valor de A é: " + a);
console.log("O valor de B é: " + b); */ 

/* --------------------------------------- */

let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

// or  [a, b] = [b, a];
// depois da troca... a = 94 e b = 7

console.log(a);
console.log(b);