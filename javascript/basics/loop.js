// for(let i=0;i<3;i++){
//     console.log(i);
// }
//while
// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }
//do while >>initialise >>update >>condition
// let i=0;
// do{
//     console.log(i);
//     i++;}
//     while(i<5);
// let age= 24;
// if (age>18){
//     console.log("Eligible for vote")
// }
// else{
//     console.log("Not Eligible for vote");
// }
// let age=27;
// if(age<18){
//     console.log("kid");
// }
// else if (age>=60){
//     console.log("old");
// }
// else {
//     console.log("young");
// }
// >>while loop
// let playerHealth = 10;

// while (playerHealth > 0) {
//   console.log(`Player health is ${playerHealth}. Attacking monster!`);//` use karne se inside ${call func/value}
  
//   // Inside the loop, we must change the variable to avoid an infinite loop
//   playerHealth -= 3; // Player takes 3 damage

//   if (playerHealth <= 0) {
//     console.log("Player has been defeated");
//   }
// }
// let name="manas"
// console.log(`hello ${name}`);//morden way in js

//do while loop

let userResponse;

do {
  // This code will always run at least one time
  userResponse = prompt("Please type 'yes' to continue:"); 
  // The prompt() function shows a popup in the browser

} while (userResponse !== "yes");

console.log("You typed 'yes'. Thank you!");


