//1
//Installation of Softwares Done
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var guestsLi = ["shan", "saad", "hamza", "kamran",];
guestsLi.push("kinza", "osama", "shanzay");
guestsLi.unshift("hassan");
guestsLi.splice(3, 0, "haris");
guestsLi.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", We are really sorry but for some emergency we have to shrink our guests"));
});
//B
var guestsL = ["shan", "saad", "hamza", "kamran", "kinza", "osama", "shanzay"];
while (guestsL.length > 2) {
    var removedGuest = guestsL.pop();
    console.log("Sorry ".concat(removedGuest, ", we won't be able to invite you to dinner."));
}
//C
guestsL.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you're still invited to dinner. See you soon!"));
});
//D
guestsL.length = 0;
console.log(guestsL);
//18
//A
var placesToVisit = ["Dubai", "Saudi Arab", "London", "New York", "Paris"];
//B
console.log(placesToVisit);
//c
var sortedlist = placesToVisit.slice().sort();
console.log(sortedlist);
//d
console.log("Orinal Array " + placesToVisit);
console.log("Arranged Array " + sortedlist);
//D
var revList = placesToVisit.slice().reverse();
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
console.log("Sorted Array: ", placesToVisit);
//J
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//19
console.log("Number of people invited to dinner: ".concat(guestsL.length));
//20
var CarsBrand = ["BMW", "Mercedes Benz", "Toyota", "Honda"];
var movies = [
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
var school = "Bahria Auditoriom Karsaz";
// console.log(Bahria Auditoriom Karsaz);
// Error in the code  is due to the fact that I am trying to access a
// variable Bahria Auditorium Karsaz without properly referencing it as a string.
//To fix the error, I need to enclose the string "Bahria Auditorium Karsaz" in quotes 
//to indicate that it is a string value.
console.log(school);
//23
var car = "Prado";
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
var starter = "Soup";
var maincourse = "Pizza";
var dessert = "cold drink";
console.log("starter is the Soup ? I predict it true");
console.log(starter == "Soup");
console.log("maincourse is the cold drink ? I predict it false");
console.log(maincourse == "cold drink");
console.log("dessert is the Pizza ? I predict it false");
console.log(dessert != "cold drink");
//Tests using the lower case function
var x = "ANAS";
var y = "asif";
console.log("x = ANAS is in upperCase ? I predict it false");
console.log(x.toLowerCase() == "ANAS");
console.log("x = ANAS is in upperCase ? I predict it true");
console.log(x.toLowerCase() != "ANAS");
console.log("y = asif is in lowerCase ? I predict it true");
console.log(y.toLowerCase() === "asif");
//Numerical tests
var a = 2;
var b = 4;
console.log("a == b ?  I predict it false");
console.log(a == b);
console.log("a < b ?  I predict it true");
console.log(a < b);
console.log("a => b ?  I predict it false");
console.log(a >= b);
console.log("a <= b ?  I predict it true");
console.log(a <= b);
console.log(" a+b == 6 ,  I predict it true");
console.log(a + b == 6);
// Tests using "and" and "or" operators
var age = 43;
console.log("Age is 43? I predict it's true.");
console.log(age >= 20 && age <= 50);
console.log("Age is 43? I predict it's false.");
console.log(age >= 50 || age <= 20);
// Test whether an item is in a array
var buddies = ["Ali", "Maaz", "Saif", "Wasi"];
console.log(buddies.indexOf('Wasi') !== -1);
console.log(buddies.indexOf('Maaz') !== -1);
// Test whether an item is not in a array
console.log(buddies.indexOf('Saif') !== -1);
console.log(buddies.indexOf('Maaz') !== -1);
//25
var alien_color = "green";
if (alien_color = "green") {
    console.log("Player just earned 5 points");
}
//
var alien_color = "yellow";
if (alien_color = "green") {
    console.log("Player just earned 5 points");
}
//26
var alien_color = "yellow";
if (alien_color = "green") {
    console.log("Player just earned 5 points");
}
else
    (alien_color = "yellow");
{
    console.log("Player just earned 10 points");
}
// B unable to do
//27
//1st
var alien_color = "yellow";
if (alien_color = "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color = "red") {
    console.log("Player just earned 10 points");
}
else
    (alien_color = "yellow");
{
    console.log("Player just earned 15 points");
}
//2n
var alien_color = "green";
if (alien_color = "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color = "red") {
    console.log("Player just earned 10 points");
}
else
    (alien_color = "yellow");
{
    console.log("Player just earned 15 points");
}
//3rd
var alien_color = "red";
if (alien_color = "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color = "red") {
    console.log("Player just earned 10 points");
}
else
    (alien_color = "yellow");
{
    console.log("Player just earned 15 points");
}
//28
var age = 22;
if (age >= 0 && age < 2) {
    console.log("The person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a  kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a  teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is a  adult");
}
else {
    console.log("The person is a  elder");
}
//29
var fruits = ['banana', 'mango', 'strawberry'];
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
var users = ["Alex", "Joan", "Saim", "Devid", "Admin"];
for (var i = 0; i < users.length; i++) {
    var username = users[i];
    console.log("Hello ".concat(username, " , thank you for logging in again."));
    if (username === "Admin") {
        console.log("Hello admin, welcome back! Would you like to see a status report?");
    }
}
//31
var userss = ["Admin", "Alex", "Saim", "Devid", "Joan"];
if (userss.length === 0) {
    console.log("We need to find some users!");
}
//
var userz = [];
if (userz.length === 0) {
    console.log("We need to find some users!");
}
//32
var currentUsers = ["Austin", "Alex", "Sam", "Paul", "Michael", "John"];
var newUsers = ["Adam", "Ana", "Samuel", "Peter", "Winston"];
for (var i = 0; i < newUsers.length; i++) {
    var newUsername = newUsers[i];
    if (currentUsers.indexOf(newUsername) !== -1) {
        console.log("Oops, the username '".concat(newUsername, "' is already taken. Try a new username."));
    }
    else {
        console.log("Congratz The username '".concat(newUsername, "' is available."));
    }
}
// toLoweCase part not done in 32
//33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(number).concat(ordinal));
}
//34
var favPizza = ["Pepproni", "Cream Cheese", "Fajita", "Chicken Supreme"];
for (var i = 0; i < favPizza.length; i++) {
    var pizzas = favPizza[i];
    console.log(pizzas);
    console.log("I like ".concat(pizzas, "  pizza"));
}
console.log("I really likes pizza.\nIt is like one of my favourite snacks.\nI am always ready for having a pizza");
//35
var farmanimals = ["Horse", "Goat", "Cow"];
for (var i = 0; i < farmanimals.length; i++) {
    var farm = farmanimals[i];
    if (farm === "Horse") {
        console.log("".concat(farm, " can be used for travelling"));
    }
    else if (farm === "Goat") {
        console.log("Goats can be used for milk and mutton");
    }
    else if (farm === "Cow") {
        console.log("Cows can be used for ploughing, milking, and meat");
    }
    else {
        console.log("This ".concat(farm, " is a farm animal"));
    }
}
console.log("All these animals are good for agriculture and farming");
//36
// var make_shirt = window.prompt("What is your shirt size?");
// var  texton_shirt= window.prompt("What text you want to be printed on shirt ?");
// console.log(`Your shirt size will be ${make_shirt} and text written on it will be ${texton_shirt} `)
//Not sure if its correct or not
function make_shirt(size, text) {
    if (size === void 0) { size = 3; }
    if (text === void 0) { text = "I like Typescript"; }
    var sizeNumber;
}
function makeShirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(message));
    return { size: size, message: message };
}
// Creating a large shirt with the default message
var largeShirt = makeShirt();
// Creating a medium shirt with the default message
var mediumShirt = makeShirt('medium');
// Creating a shirt of any size with a different message
var customShirt = makeShirt('small', 'Custom message for a small shirt');
console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);
//38
function describeCity(city, country) {
    if (country === void 0) { country = 'Default Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York'); // Uses the default country
describeCity('Tokyo', 'Japan');
//39
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with at least three city-country pairs
var location1 = cityCountry('Lahore', 'Pakistan');
var location2 = cityCountry('London', 'UK');
var location3 = cityCountry('New York', 'USA');
// Print the values returned
console.log(location1);
console.log(location2);
console.log(location3);
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Josef Albars', 'Jackson Pollock');
var album2 = make_album('Micheal jackson', 'Franz Marc');
var album3 = make_album('Ivan Albright', 'Tomma Abts');
console.log(album1);
console.log(album2);
console.log(album3);
//41
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function showMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
showMagicians(magicians);
//42
function make_great(magicianz) {
    for (var i = 0; i < magicianz.length; i++) {
        magicianz[i] = 'the great ${magicianz[i]}';
    }
}
function show_megicians(megicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
var magicianz = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicianz);
show_megicians(magicianz);
//43
var magician = ['Harry Houdini', 'David Copperfield', 'Penn Jilette', 'Teller'];
function make_greater(names) {
    var greatNames = names.map(function (name) { return "Great ".concat(name); });
    return greatNames;
}
function show_magicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
var greatMagicians = make_greater(__spreadArray([], magician, true));
show_magicians(magician);
show_magicians(greatMagicians);
//44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("You ordered a sandwich.");
        return;
    }
    console.log("You ordered a sandwich with ".concat(items.join(", "), "."));
}
sandwich("chicken", "lettuce", "onion", "tomato");
sandwich("smokey beef", " Mogrella cheese");
sandwich();
function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var i = 0; i < args.length; i += 2) {
        var key = args[i];
        var value = args[i + 1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar("Toyota", "Corolla", "color", "black", "year", 2023);
console.log(myCar);
