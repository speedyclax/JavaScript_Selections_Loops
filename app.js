console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i < 100; i++) {
if (i % 2 != 0) {
   console.log(i);
}
}

console.log("");
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(`${i} FIZZBUZZ`);
    }
    else {
        if (i % 3 == 0) {
            console.log(`${i} FIZZ`);
        }
        if (i % 5 == 0) {
            console.log(`${i} BUZZ`);
        }
    }  
}

console.log("");
console.log("EXERCISE 3:\n==========\n");

console.log("EXERCISE 1: While Loop");
console.log("");

let i = 1;

while (i <= 99) {
   if (i % 2 != 0) {
       console.log(i);
       }    
       i++;
   
}

console.log("");
console.log("EXERCISE 1: Do/While Loop");
console.log("");

let x = 1;

do {
   if (x % 2 != 0) {
       console.log(x);
       }    
       x++;
} while (x <= 100);

console.log("");
console.log("EXERCISE 2: While Loop");
console.log("");

let a = 1;

while (a <= 99) {
    if ((a % 3 == 0) && (a % 5 == 0)) {
        console.log(`${a} FIZZBUZZ`);
    }
    else {
        if (a % 3 == 0) {
       console.log(`${a} FIZZ`);
        }
    if (a % 5 == 0) {
      console.log(`${a} BUZZ`);
        }
    }
    a++;
}

console.log("");
console.log("EXERCISE 2: Do/While Loop");
console.log("");

let y = 1;
do { 
    if ((y % 3 == 0) && (y % 5 == 0)) {
        console.log(`${y} FIZZBUZZ`);
    }
    else {
        if (y % 3 == 0) {
       console.log(`${y} FIZZ`);
        }
    if (y % 5 == 0) {
      console.log(`${y} BUZZ`);
        }
    }
    y++;
} while (y <= 99);


console.log("");
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let z = 1; z <= n; z++) {
    if (z == value){
    console.log(`Found ${value}`);
    break;
    }
    if (z == n) {
        console.log(`Did not find ${value} within 1-${n}`);
    }
}

console.log("");
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`fizzDivisor = ${fizzDivisor}`);
console.log(`buzzDivisor = ${buzzDivisor}`);

for (let i = start; i <= end; i++) {
    if ((i % fizzDivisor == 0) && (i % buzzDivisor == 0)) {
        console.log(`${i} FIZZBUZZ`);
    }
    else {
        if (i % fizzDivisor == 0) {
            console.log(`${i} FIZZ`);
        }
        if (i % buzzDivisor == 0) {
            console.log(`${i} BUZZ`);
        }
    }  
}

