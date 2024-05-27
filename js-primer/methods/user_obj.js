function Person(firstName, lastName, height, weight){
    //Below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    //Below is a method
    this.getFullName = function(){ return this.firstName + " " + this.lastName}
}
var person1 = new Person("Pius", "Onobhayedo",1.72, 80);
var person2 = new Person("Mary", "Joseph", 1.7, 70)
console.log (person1.firstName); //Prints out Pius
console.log (person1.getFullName()); //Prints out Pius Onobhayedo
console.log (person2.firstName); //Prints out Mary
console.log (person2.getFullName()); //Prints out Mary Joseph