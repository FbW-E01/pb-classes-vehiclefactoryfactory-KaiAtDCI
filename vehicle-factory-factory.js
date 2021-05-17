// Solution 1
// @Milad: For Solutions 2 and 3, see vehicle-factory-function2.js and vehicle-factory-class.js :-)
"use strict"

function createFactory(type) {
    return function Vehicle(make, model) {
        this.type = type;
        this.make = make;
        this.model = model;
    }
}

const bicycleFactory = createFactory('Bicycle');
const carFactory = createFactory('Car');
const boatFactory = createFactory('Boat');
const blimpFactory = createFactory('Blimp');
const trainFactory = createFactory('Train');

const products = [
    new bicycleFactory('Bicycle Factory', 'Model X'),
    new bicycleFactory('Bike Company', 'Low Bike'),
    new carFactory('Car Factory', 'Car Model 1'),
    new boatFactory('Steel Boats', 'B 1000'),
    new blimpFactory('Blimps Corp', 'Blimp 1'),
    new trainFactory('Train Factory', 'Train 1'),
];

products.forEach(product => console.log(product));

console.log(typeof bicycleFactory); // => returns function because it is a function
console.log(typeof products[0]);    // => returns object because the returned constructor
                                    // function of createFactory creates objects
