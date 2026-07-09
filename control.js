const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8;
const maxCapacity = area / spacePerPlant;

console.log("Maximum plants the garden can hold:", maxCapacity);
console.log("\n--- Part 1 ---");

let week1Plants = 20 * 2; 
let week1Capacity = week1Plants / maxCapacity;

if (week1Capacity > 0.80) {
    console.log("Week 1 (" + week1Plants + " plants): Prune");
} else if (week1Capacity >= 0.50 && week1Capacity <= 0.80) {
    console.log("Week 1 (" + week1Plants + " plants): Monitor");
} else {
    console.log("Week 1 (" + week1Plants + " plants): Plant");
}



