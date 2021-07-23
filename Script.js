let name = String;
age = Number;
gender = String;

function showDetails(name, age, gender) {
	 age = prompt("Enter your age:", "");
    name = prompt("Enter your name:", "");
    gender = prompt("Enter your gender", "");
   
    answer = "";
    if (age >= 18) {
        answer = "You are above 18,"
    } else
        answer = "You are younger than 18,"

    console.log("Hi" + " " + name + " " + (gender.substring(0, 1)) + " " + answer);

}
showDetails(age, name);

//arrays

let fulldetails = [
    _name = prompt("Enter Name", "", ""),
    surname = prompt("Enter Surname:", ""),
    gender = prompt("Enter Gender", ""),
    age = prompt("Enter Your Age", "")
];
for (i = 0; i < 5; i++) {
    _det.push(i);
}

//  let otherdetails = [
//     _name = "Ntshuxeko", surname ="Chaba",gender ="Male",age ="24",

//    _name =  "Risuna", surname = "Chauke", gender = "Female", age = "26",
//   ];
let _det = [
    "Name", "Surname", "Gender", "Age"
];
let deco = _det.join(" | ");
for (i = 0; i < 5; i++) {
    _det.push(i);
}
let _details = fulldetails.join(" | ");
let _heading = "Heading";

for (i = 0; i < 5; i++) {
    fulldetails.push(i);
}
//let _other = otherdetails.join(" | ");
console.log(_heading);
console.log(_det[i] + deco);
console.log(" " + fulldetails[i * 2] + _details);
//console.log(" " + otherdetails[i] + _other);

//arrow functions
let sum = (num1, num2, num3) => num1 + num2 + num3;

console.log(sum(2, 3, 5));