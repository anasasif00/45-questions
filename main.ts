//1
 //Installation of Softwares Done

//2
//console.log('Hello Ali,would you like to learn some Python today?');

//3
/*const names: string ='Anas is a very good boy';

console.log(names.toUpperCase());
console.log(names.toLowerCase());

function titleCase(str:string) {
    let newTitle = str.split(" ");
    let updatedTitle:string[] = [];
    for(let st in newTitle){
       updatedTitle[st] = newTitle[st][0].toUpperCase() +
    newTitle[st].slice(1).toLowerCase();
    }
      return updatedTitle.join(" ");
    }
    console.log(titleCase(names));*/

    //4

//const quote = '“constantly think about how you could be doing things better. keep questioning yourself.”';
//const author = 'Elon Musk';

//console.log(`${author} once said, ${quote}`);

//5

//const famous_person = "Sir Zia Khan";
//const quotation = "You are doing great work.";
//const message = `"${famous_person}" , "${quotation}"`;

//console.log(message);

//6

//const nameWithWhitespace = "\t  \n   Anas  \n  \t";
//console.log("Name with whitespace:", nameWithWhitespace);

//const strippedName = nameWithWhitespace.trim();
//console.log("Stripped name:", strippedName);

//7
//8

//console.log(5+3);  // Addition
//console.log(5-3);  // Subtraction
//console.log(5*3);   // Multiplication
//console.log(5/3);  // Division

//9
//const favouriteNumber = 25;
//console.log(`My favourite number is ${favouriteNumber}`)

//10
//This is program number 3
// var names = 'Anas is a very good boy';
// console.log(names.toUpperCase());
// console.log(names.toUpperCase());
// function titleCase(str) {
//     var newTitle = str.split(" ");
//     var updatedTitle = [];
//     for (var st in newTitle) {
//         updatedTitle[st] = newTitle[st][0].toUpperCase() +
//             newTitle[st].slice(1).toLowerCase();
//     }
//     return updatedTitle.join(" ");
// }
// console.log(titleCase(names));

//     // In this program first I created a variable of a sentence. Then I am printing it
//     // with a method of toUpperCase() and  toLowerCase() in a sepatate console.log
//     // After that I created a function of titleCase in which I am splitting all the words of a sentence
//     // then sllicing first letter of each words and converting it into capital letter using toUpperCase() and 
//     // then joining remaining letters converting into toUpperCase() and after resturning printing it into console.log
//     // with the function name titleCase

// //This is program number 4

// const quote = '“constantly think about how you could be doing things better. keep questioning yourself”';
// const author = 'Elon Musk';

// console.log(`${author} once said, ${quote}`);

// // In this program I am giving two separate variables of qoute and author with name and qoutation.
// // Then I am printing a sentence with both varibles together in a console.log 

//11
//const Friends = ["usama", "maaz", "azmeer", "usman"]
//for (let i=0; i<Friends.length; i++ ){
 // console.log(Friends[i])
//}

//12
//const friend=["maaz" , "azmeer" , "usama" , "usman" , "ali"];
//for (let i = 0; i < friend.length; i++) {
  //  console.log(`Hello my friend ${friend[i]} ,how are you?`);
//}

//13
//const transportation= ["toyota landcruiser", "mercedes benz", "toyota revo", "toyota corolla", "Honda civic"];
//for (let i = 0; i < transportation.length; i++) {
  //console.log(`I would like to own a ${transportation[i]}.`);
//}

//14
//const guests = ["shan", "saad","hamza","okasha"];
//for (let i = 0; i < guests.length; i++) {
  //console.log(`Dear ${guests[i]}. I am inviting you to for a Dinner at My Place.I request the honor of your presence.`);
//}

//15
//const guestsList=["shan" , "saad" , "hamza" , "okasha"];
//const notComing="okasha";
//const comingGuest="kamran"

//for (let i = 0; i < guestsList.length; i++) {
  //  if (guestsList[i] === notComing) {
    //    guestsList[i] = comingGuest;
      //}
    //console.log(`Dear ${guestsList[i]}. I am inviting you to on a Dinner at my place.I request the honor of your presence.`);
//};

//16
//const guestList = ["shan", "saad", "hamza", "kamran",];
//guestList.push("kinza", "osama", "shanzay");

//guestList.forEach(guest => {
  //console.log(`Dear ${guest}, I am inviting you to a dinner at my place. I request the honor of your presence.`);
//});

    //A:

  //  console.log("Quick Update! I found a bigger table for dinner.");
     
    //B:

    //const guestLis = ["shan", "saad", "hamza","kamran"];
    //guestLis.push("kinza", "osama", "shanzay")
    //guestLis.unshift("hassan");

    //guestLis.forEach(guest => {
    //console.log(`Dear ${guest}, I am inviting you to a dinner at my place. I request the honor of your presence.`);
    //});

    //C:
    ///const guestLi = ["shan", "saad", "hamza", "kamran"];
    //guestLi.push("kinza", "osama", "shanzay");
    //guestLi.unshift("hassan");
    //guestLi.splice(3, 0, "haris")

    //guestLi.forEach(guest => {
    //console.log(`Dear ${guest}, I am inviting you to a dinner at my place. I request the honor of your presence.`);
    //});

//17
//A 
   
const guestsLi = ["shan", "saad", "hamza", "kamran",];
guestsLi.push("kinza", "osama", "shanzay");
guestsLi.unshift("hassan");
guestsLi.splice(3, 0, "haris")

guestsLi.forEach(guest => {
console.log(`Dear ${guest}, We are really sorry but for some emergency we have to shrink our guests`);
});

//B
const guestsL = ["shan", "saad", "hamza", "kamran", "kinza", "osama", "shanzay"];

while (guestsL.length > 2) {
const removedGuest = guestsL.pop();
console.log(`Sorry ${removedGuest}, we won't be able to invite you to dinner.`);
}

//C
 guestsL.forEach(guest => {
 console.log(`Dear ${guest} you're still invited to dinner. See you soon!`);
 });

 //D
 guestsL.length = 0;

 console.log(guestsL);

 //18

 //A
 const placesToVisit=["Dubai" , "Saudi Arab" , "London" , "New York","Paris"];

 //B
 console.log(placesToVisit);

 //c
 const sortedlist = placesToVisit.slice().sort();
 console.log(sortedlist);

 //d
 console.log("Orinal Array " + placesToVisit);
 console.log("Arranged Array " + sortedlist);

 //D
 const revList =placesToVisit.slice().reverse();
 console.log(revList);

 //E
 console.log(placesToVisit);

 //G
 placesToVisit.reverse();
 console.log("Reversed Array:", placesToVisit);

 //H

 placesToVisit.reverse();
 console.log("Original Array:", placesToVisit);

 //I
 placesToVisit.sort();
 console.log("Sorted Array: " , placesToVisit)

 //J

 //• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

 
 //19
 

console.log(`Number of people invited to dinner: ${guestsL.length}`);

//20

const CarsBrand = ["BMW", "Mercedes Benz", "Toyota", "Honda"];

//21
interface Movie {
  title: string;
  director: string;
  year: number;
}

const movies: Movie[] = [
  {
    title: 'Titanic',
    director: 'James Cameron',
    year: 1997
  },
  {
    title: 'The Invitation',
    director: 'Jessica M. Thompson',
    year: 2022
  },
  {
      title: 'Psycho',
      director: 'Mysskin',
      year: 2020
  },

];

console.log(movies);


//22

// I am commenting this code 

var school="Bahria Auditoriom Karsaz";
// console.log(Bahria Auditoriom Karsaz);

// Error in the code  is due to the fact that I am trying to access a
// variable Bahria Auditorium Karsaz without properly referencing it as a string.

//To fix the error, I need to enclose the string "Bahria Auditorium Karsaz" in quotes 
//to indicate that it is a string value.

console.log(school);

//23

let car = "Prado" ;

console.log("car == Prado ? I predict it true");
console.log(car == "Prado");

console.log("car != Prado ?  I predict it false");
console.log(car != "Prado");

console.log("car <= Prado ?  I predict it true");
console.log(car <= "Prado");

console.log("car =< Prado ?  I predict it false");
console.log(car === "Prado");

console.log("car === Prado ?  I predict it false");
console.log(car === "Prado");

console.log("car !== Prado ?  I predict it true");
console.log(car == "Prado");

console.log("car > Prado ?  I predict it false");
console.log(car > "Prado");

console.log("car <= Prado ?  I predict it true");
console.log(car <= "Prado");

console.log("car == Prado ?  I predict it false");
console.log(car == "Prado");

console.log("car < Prado ?  I predict it true");
console.log(car < "Prado");

//24


// // Test whether an item is in a array

// let buddies = ["Azmeer", "Maaz", "Muddassir", "hamza"];

// console.log(buddies.includes('Azmeer'));
// console.log(buddies.includes('Mudassir'));

// // Test whether an item is not in a array

// console.log(!buddies.includes('Azmeer'));
// console.log(!buddies.includes('Mudassir'));

//Tests for equality and inequality with strings

let starter = "Soup";
let maincourse = "Pizza";
let dessert = "cold drink";

console.log("starter is the Soup ? I predict it true");
console.log(starter == "Soup");

console.log("maincourse is the cold drink ? I predict it false");
console.log(maincourse == "cold drink");

console.log("dessert is the Pizza ? I predict it false");
console.log(dessert != "cold drink");


//Tests using the lower case function

let x = "ANAS" ;
let y = "asif" ;

console.log("x = ANAS is in upperCase ? I predict it false");
console.log(x.toLowerCase() == "ANAS");

console.log("x = ANAS is in upperCase ? I predict it true");
console.log(x.toLowerCase() != "ANAS");

console.log("y = asif is in lowerCase ? I predict it true");
console.log(y.toLowerCase() === "asif");

//Numerical tests
let a = 2;
let b = 4;

console.log( "a == b ?  I predict it false");
console.log(a == b);

console.log( "a < b ?  I predict it true");
console.log(a < b);

console.log( "a => b ?  I predict it false");
console.log(a >= b);

console.log( "a <= b ?  I predict it true");
console.log(a <= b);

console.log(" a+b == 6 ,  I predict it true");
console.log(a+b == 6);

// Tests using "and" and "or" operators

var age = 43;

console.log("Age is 43? I predict it's true.");
console.log(age >= 20 && age <= 50);

console.log("Age is 43? I predict it's false.");
console.log(age >= 50 || age <= 20);


// Test whether an item is in a array

let buddies = ["Ali", "Maaz", "Saif", "Wasi"];

console.log(buddies.indexOf('Wasi') !== -1);
console.log(buddies.indexOf('Maaz') !== -1);

// Test whether an item is not in a array

console.log(buddies.indexOf('Saif') !== -1);
console.log(buddies.indexOf('Maaz') !== -1);



//25

var alien_color = "green" ;

if (alien_color = "green"){
console.log("Player just earned 5 points");
}


//
var alien_color = "yellow" ;

if (alien_color = "green"){
console.log("Player just earned 5 points");
}

//26

var alien_color = "yellow" ;

if (alien_color = "green"){
console.log("Player just earned 5 points");
}
else(alien_color = "yellow");{
console.log("Player just earned 10 points");
}

// B unable to do


//27

//1st
var alien_color = "yellow" ;

if (alien_color = "green"){
console.log("Player just earned 5 points");
}
else if (alien_color = "red"){
console.log("Player just earned 10 points");
}
else(alien_color = "yellow");{
console.log("Player just earned 15 points");
}

//2n
var alien_color = "green" ;

if (alien_color = "green"){
console.log("Player just earned 5 points");
}
else if (alien_color = "red"){
console.log("Player just earned 10 points");
}
else(alien_color = "yellow");{
console.log("Player just earned 15 points");
}

//3rd
var alien_color = "red" ;

if (alien_color = "green"){
console.log("Player just earned 5 points");
}
else if (alien_color = "red"){
console.log("Player just earned 10 points");
}
else(alien_color = "yellow");{
console.log("Player just earned 15 points");
}

//28

var age=22

if (age >= 0 && age < 2) {
console.log("The person is a baby");
} else if (age >= 2 && age < 4) {
console.log("The person is a toddler");
} else if (age >= 4 && age < 13) {
console.log("The person is a  kid");
} else if (age >= 13 && age < 20) {
console.log("The person is a  teenager");
} else if (age >= 20 && age < 65) {
console.log("The person is a  adult");
} else {
console.log("The person is a  elder");
}

//29

let fruits = ['banana', 'mango', 'strawberry'];

if (fruits.indexOf('apple') !== -1) {
console.log("I like apple!");
}

if (fruits.indexOf('banana') !== -1) {
console.log("I  love banana!");
}

if (fruits.indexOf('mango') !== -1) {
console.log("I always eat mango!");
}

if (fruits.indexOf('strawberry') !== -1) {
console.log("I  like strawberry!");
}

if (fruits.indexOf('pineapple') !== -1) {
console.log("I can eat pineapples!");
}

//30

let users = ["Alex", "Joan", "Saim", "Devid" ,"Admin"];

for (let i = 0; i < users.length; i++) {
let username = users[i];
console.log(`Hello ${username} , thank you for logging in again.`);

if (username === "Admin") {
  console.log("Hello admin, welcome back! Would you like to see a status report?");
}
}

//31

let userss = ["Admin", "Alex", "Saim", "Devid", "Joan"];

if (userss.length === 0) {
console.log("We need to find some users!");
}
//

let userz = [ ];

if (userz.length === 0) {
console.log("We need to find some users!");
}

//32

let currentUsers = ["Austin", "Alex", "Sam", "Paul", "Michael" , "John"];
let newUsers = ["Adam", "Ana", "Samuel", "Peter", "Winston"];

for (let i = 0; i < newUsers.length; i++) {
  let newUsername = newUsers[i];
  
  if (currentUsers.indexOf(newUsername) !==-1) {
    console.log(`Oops, the username '${newUsername}' is already taken. Try a new username.`);
  } else {
    console.log(`Congratz The username '${newUsername}' is available.`);
  }
}

// toLoweCase part not done in 32

//33

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  let ordinal;

  if (number === 1) {
    ordinal = 'st';
  } else if (number === 2) {
    ordinal = 'nd';
  } else if (number === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }

  console.log(`${number}${ordinal}`);
}


//34

let favPizza=["Pepproni" , "Cream Cheese" , "Fajita" , "Chicken Supreme"]
for (let i = 0; i < favPizza.length; i++){
  let pizzas = favPizza[i];

  console.log(pizzas);
  console.log(`I like ${pizzas}  pizza`)
}

console.log("I really likes pizza.\nIt is like one of my favourite snacks.\nI am always ready for having a pizza");

//35

let farmanimals = ["Horse", "Goat", "Cow"];

for (let i = 0; i < farmanimals.length; i++) {
  let farm = farmanimals[i];
   
  if (farm === "Horse") {
    console.log(`${farm} can be used for travelling`);
  } else if (farm === "Goat") {
    console.log("Goats can be used for milk and mutton");
  } else if (farm === "Cow") {
    console.log("Cows can be used for ploughing, milking, and meat");
  } else {
    console.log(`This ${farm} is a farm animal`);
  }
}
 
console.log("All these animals are good for agriculture and farming")

//36

// var make_shirt = window.prompt("What is your shirt size?");
// var  texton_shirt= window.prompt("What text you want to be printed on shirt ?");

// console.log(`Your shirt size will be ${make_shirt} and text written on it will be ${texton_shirt} `)

//Not sure if its correct or not

function  make_shirt(size = 3 , text = "I like Typescript"){
  let sizeNumber;

}

//37

interface Shirt {
  size: string;
  message: string;
}

function makeShirt(size: string = 'large', message: string = 'I love TypeScript'): Shirt {
  console.log(`Creating a ${size} shirt with the message: ${message}`);
  return { size, message };
}

// Creating a large shirt with the default message
const largeShirt = makeShirt();

// Creating a medium shirt with the default message
const mediumShirt = makeShirt('medium');

// Creating a shirt of any size with a different message
const customShirt = makeShirt('small', 'Custom message for a small shirt');

console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);

//38

function describeCity(city: string, country: string = 'Default Country'): void {
  console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York');  // Uses the default country
describeCity('Tokyo', 'Japan');

//39

function cityCountry(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs
const location1 = cityCountry('Lahore', 'Pakistan');
const location2 = cityCountry('London', 'UK');
const location3 = cityCountry('New York', 'USA');

// Print the values returned
console.log(location1);
console.log(location2);
console.log(location3);

//40
interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
      artist,
      title
  };

  if (tracks !== undefined) {
      album.tracks = tracks;
  }

  return album;
}

const album1 = make_album('Josef Albars', 'Jackson Pollock');
const album2 = make_album('Micheal jackson', 'Franz Marc', ); 
const album3 = make_album('Ivan Albright', 'Tomma Abts');


console.log(album1);
console.log(album2);
console.log(album3);

//41
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function showMagicians(magicians: string[]):void {
  for (let i=0; i< magicians.length; i++) {
      console.log(magicians[i]);
  }
}

showMagicians(magicians);


//42

function make_great(magicianz: string[]): void {
  for (let i=0; i< magicianz.length; i++) {
      magicianz[i] = 'the great ${magicianz[i]}';
  }
}

function show_megicians(megicians: string[]): void {
  for (let magician of magicians) {
      console.log(magician);
  }
}

let magicianz: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

make_great(magicianz);
show_megicians(magicianz);

//43

const magician: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jilette','Teller'];

function make_greater(names: string[]): string[] {
    const greatNames: string[] = names.map(name => `Great ${name}`);
    return greatNames;
}

function show_magicians(names: string[]): void {
    names.forEach(name => console.log(name));
}

const greatMagicians: string[] = make_greater([...magician]);
show_magicians(magician);
show_magicians(greatMagicians);


//44

function sandwich(...items: string[]) {
  if (items.length === 0) {
      console.log("You ordered a sandwich.");
      return;
  }
  console.log(`You ordered a sandwich with ${items.join(", ")}.`);
}

sandwich("chicken", "lettuce", "onion", "tomato");
sandwich("smokey beef", " Mogrella cheese");
sandwich();

//45

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...args: any[]): Car {
  const car: Car = {
      manufacturer,
      model,
  };

  for (let i = 0; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      car[key] = value;
  }

  return car;
}

const myCar = createCar("Toyota", "Corolla", "color", "black", "year", 2023);
console.log(myCar);

