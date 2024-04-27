let greetingText = "Hi my name is YG";
let age = 32;
let hobbies = ["Sports", "Cooking", "Reading"]; // array
let job = {
  title: "Developer",
  place: "New York",
  salary: 5000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: "Max",
  greet() {
    console.log("Hello!");
  },
};

person.greet();
