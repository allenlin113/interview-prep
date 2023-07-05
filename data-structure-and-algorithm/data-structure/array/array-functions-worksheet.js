const characters = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: 188,
        mass: 84,
        eye_color: "blue",
        gender: "male",
    },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((character) => character.name);
// console.log(allNames);

//2. Get array of all heights
const allHeight = characters.map((character) => character.height);
// console.log(allHeight);

//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((character) => {
    return { name: character.name, height: character.height };
});
// console.log(nameAndHeight);

//4. Get array of all first names
const firstNames = characters.map((character) => {
    return character.name.split(" ")[0];
});
// console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((accumulator, character) => {
    return (accumulator += character.mass);
}, 0);
// console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((accumulator, character) => {
    return (accumulator += character.height);
}, 0);
// console.log(totalHeight);

//3. Get total number of characters by eye color
const eyeColors = characters.reduce((accumulator, character) => {
    const eye_color = character.eye_color;
    if (!(eye_color in accumulator)) {
        accumulator[eye_color] = 0;
    }
    accumulator[eye_color]++;
    return accumulator;
}, {});
// console.log(eyeColors);

//4. Get total number of characters in all the character names
const totalNameLengths = characters.reduce((accumulator, character) => {
    return (accumulator += character.name.length);
}, 0);
// console.log(totalNameLengths);

//***FILTER***
//1. Get characters with mass greater than 100
const greaterThan100Mass = characters.filter((character) => {
    return character.mass > 100;
});
// console.log(greaterThan100Mass);

//2. Get characters with height less than 200
const lessThan200Height = characters.filter((character) => {
    return character.height < 200;
});
// console.log(lessThan200Height);

//3. Get all male characters
const maleCharacters = characters.filter((character) => {
    return character.gender === "male";
});
// console.log(maleCharacters);

//4. Get all female characters
const femaleCharacters = characters.filter((character) => {
    return character.gender === "female";
});
// console.log(femaleCharacters)

//***SORT***
//1. Sort by mass
const sortedMass = characters.sort((a, b) => a.mass - b.mass);
// console.log(sortedMass);

//2. Sort by height
const sortedHeight = characters.sort((a, b) => a.height - b.height);
// console.log(sortedHeight);

//3. Sort by name
const sortedName = characters.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    return 1;
});
// console.log(sortedName);

//4. Sort by gender
const sortedGender = characters.sort((a, b) => {
    if (a.gender === "female") {
        return -1;
    }
    return 1;
});
// console.log(sortedGender);

//***EVERY***
//1. Does every character have blue eyes?
const everyBlueEyes = characters.every((character) => character.eyeColors === "blue");
// console.log(everyBlueEyes);

//2. Does every character have mass more than 40?
const everyMassMoreThan40 = characters.every((character) => character.mass > 40);
// console.log(everyMassMoreThan40);

//3. Is every character shorter than 200?
const everyShorterThan200 = characters.every((character) => character.height < 200);
// console.log(everyShorterThan200);

//4. Is every character male?
const everyMale = characters.every((character) => character.gender === "male");
// console.log(everyMale);

//***SOME***
//1. Is there at least one male character?
const someMale = characters.some((character) => character.gender === "male");
// console.log(someMale);

//2. Is there at least one character with blue eyes?
const someBlueEyes = characters.some((character) => character.eye_color === "blue");
// console.log(someBlueEyes);

//3. Is there at least one character taller than 210?
const someTallerThan210 = characters.some((character) => character.height > 210);
// console.log(someTallerThan210);

//4. Is there at least one character that has mass less than 50?
const someMassLessThan50 = characters.some((character) => character.mass < 50);
// console.log(someMassLessThan50);
