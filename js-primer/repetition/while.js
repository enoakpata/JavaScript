/*var n = 0;
while(n != 5){
 n = Math.floor((Math.random() * 10));
 console.log(n)
}*/

var n = 0;
while(n != 5){
n = Math.random(); //generate a random number between 0 and 1 exclusive of 1.
n = n * 10;//multiply the number generated by 10
n = Math.floor(n); //round down
console.log(n); //print the final number
} 
