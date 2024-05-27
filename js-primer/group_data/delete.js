var phones = {
    make: 'Samsung',
    model: 'S7',
    cost: 500
}
console.log('make' in phones); //Prints out true
delete phones.make; //Delete property phones.make
console.log('make' in phones); //Prints out false 