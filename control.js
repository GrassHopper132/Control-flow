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

let week2Plants = week1Plants * 2;
let week2Capacity = week2Plants / maxCapacity;

if (week2Capacity > 0.80) {
    console.log("Week 2 (" + week2Plants + " plants): Prune");
} else if (week2Capacity >= 0.50 && week2Capacity <= 0.80) {
    console.log("Week 2 (" + week2Plants + " plants): Monitor");
} else {
    console.log("Week 2 (" + week2Plants + " plants): Plant");
}

let week3Plants = week2Plants * 2;
let week3Capacity = week3Plants / maxCapacity;

if (week3Capacity > 0.80) {
    console.log("Week 3 (" + week3Plants + " plants): Prune");
} else if (week3Capacity >= 0.50 && week3Capacity <= 0.80) {
    console.log("Week 3 (" + week3Plants + " plants): Monitor");
} else {
    console.log("Week 3 (" + week3Plants + " plants): Plant");
}

console.log("\n--- Part 2 ---");

let plantsAfter10Weeks = startingPlantsPart2 * (2 ** 10); 
let totalSpaceNeeded = plantsAfter10Weeks * spacePerPlant;
let additionalSpaceNeeded = totalSpaceNeeded - area;

console.log("Total plants after 10 weeks:", plantsAfter10Weeks);
console.log("Total space needed (sq meters):", totalSpaceNeeded);
console.log("Additional space needed (sq meters):", additionalSpaceNeeded);

let expandedRadius = Math.sqrt(totalSpaceNeeded / PI);
console.log("Radius of the expanded garden (meters):", expandedRadius);


console.log("\n--- Part 3 ---");

    let badStartPlants = 100;
    let requiredSpace = badStartPlants * spacePerPlant;
    
    // Check if the space we need is more than the space we have
    if (requiredSpace > area) {
        throw new Error("Garden capacity exceeded! You need " + requiredSpace + " sq meters, but only have " + area + " sq meters.");

    
    console.log("Planting successful.");
    
} catch (error) {
    console.log("ERROR CAUGHT: " + error.message);


// 78.5375 area, max capacity 98.171875






























