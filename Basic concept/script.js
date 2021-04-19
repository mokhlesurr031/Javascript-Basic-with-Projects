function greet(age) {
    // let name = prompt("What is your name");
    return `Hello ${name} with age ${age}`;
}


document.getElementById('someText').innerHTML = greet(23);




// WHILE LOOP

let num = 0;

while (num < 20) {
    num += 1;
    console.log(num);
}


// FOR LOOP


for (let num = 0; num < 20; num++) {
    console.log(num);
}



// DATA TYPES

let yourAge = 24; //number
let yourName = 'Mahin'; //string
let objectName = { first: "Jeffy", last: "Mahin" }; //object (dictionary in python)
let truth = false; //boolean
let groceries = ['apple', 'banana', 'oranges'];  //array (list in python)
let random; //undefined
let nothing = null; //value null


// String in JS

let fruit = "banana";
let moreFruit = 'apple\nbanana';   //new line - \n
console.log(moreFruit.length);  //length of a string
console.log(fruit.indexOf('a'));  //index of any character (if result -1 then the char doesn't exist)
console.log(fruit.slice(1, 4));  //print char in slice range
console.log(fruit.replace('ban', '123')); //replace character
console.log(fruit.toUpperCase(fruit));  //uppercase letter
console.log(fruit.toLowerCase(fruit));  //lowercase letter
console.log(fruit.charAt(2));  //character name by index
console.log(fruit[2]);  //same as charAt()
console.log(fruit.split(''));  //split by ""   
console.log(moreFruit.split('\n'));  //split by newline



// ARRAY IN JS

let fruitsArray = ['apple', 'banana', 'pine apple'];  //create an array
let moreFruitsArray = new Array('apple', 'banana', 'pine apple');
console.log(typeof (fruitsArray));
console.log(typeof (moreFruitsArray));

console.log(fruitsArray[0]); //access value at index
fruitsArray[0] = 'peer';  //change index value
console.log(fruitsArray);

for (let i = 0; i < fruitsArray.length; i++) {  //loop through the array
    console.log(fruitsArray[i]);
}

// array common methods

console.log(fruitsArray.toString());  //convert array into string
console.log(fruitsArray.join('__'));  //join each item of an array by '__'

// We can pass multiple params in console log as well 

console.log(fruitsArray, fruitsArray.pop(), fruitsArray);  //remove last item of the array

fruitsArray.shift();  //removes first element of the array (expensive operation)
console.log(fruitsArray);


fruitsArray.push("blackberry");  //add new element in the last index of the array
console.log(fruitsArray);

fruitsArray[fruitsArray.length] = 'new fruit';  //same as push 
console.log(fruitsArray);

fruitsArray.unshift("Kiwi");  //add new element in the first index
console.log(fruitsArray);


// CONCATE

let array_1 = [1, 2, 3];
let array_2 = [4, 5, 6];
let long_Array = array_1.concat(array_2);

console.log(long_Array);
console.log(long_Array.slice(1, 3));  //range of index
console.log(long_Array.reverse());   //reverse an array


let randomNum = [4, 5, 4, 1, 4, 6, 85, 44];
console.log(randomNum.sort());  //sort an array

// ASCENDING SORT
ascSort = randomNum.sort(function (a, b) { return a - b; });
// document.write(ascSort);

// DESCENDING SORT
descSort = randomNum.sort(function (a, b) { return b - a; });
// document.write(descSort);


// APPEND/PUSH IN ARRAY

let emptyArray = new Array();

for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);



// OBJECT IN JS

let personObject = {
    first: "Joe",
    last: "Biden",
    age: 24,
    height: 170,
    personInfo: function () {                         //Declare a function
        return this.first + ' ' + this.last;
    }
};

console.log(personObject.first);
console.log(personObject.last);

personObject.first = 'Donald';  //Change value
console.log(personObject.first);

personObject.age++;   //Increament
console.log(personObject.age);

console.log(personObject.personInfo());  //Call function from object



// CONDITIONALS, CONTROL FLOWS (IF ELSE)

// let age = prompt("How old are you?");
let age = 45;
if ((age >= 18) && (age <= 35)) {
    status = "Targeted demo";
}
else {
    status = "Not my audience";
}

console.log(status);


// DATE TIME

let dateToday = new Date();
console.log(dateToday);
console.log(dateToday.getDate());  //returns date
console.log(dateToday.getFullYear());  //returns year
console.log(dateToday.getDay());  //returns day by number - 0= Sunday, 1= Monday ....


// SWITCH STATEMENT

let day;
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday';
        break;

    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'Thursday';
        break;

    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;

}

console.log(day);



// JSON IN JS 


































