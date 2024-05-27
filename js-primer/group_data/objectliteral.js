myObject = {
    element1: expression1,
    element2: expression2,
    element3: expression3
} 
var myObject = {
    name: {
    firstName : "Enoabasi",
    surname: "Akpata"
    },
    expertise: "Software design and development",
    languages: ["Python","JavaScript","Java","C++"],
    isRetired: false,
    favouriteCombination: 3 + 3
}

console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
console.log(myObject.expertise); //Prints out Software design and development
console.log(myObject['expertise']); //Also prints out Software design and development
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject.isRetired); //Prints out false
console.log(myObject['isRetired']); //Also prints out false
console.log(myObject.favouriteCombination); //Prints out 6
console.log(myObject['favouriteCombination']); //Also prints out 6
