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

const vehicles = [];
vehicles.push(new bicycleFactory('Bicycle Factory', 'Model X'));
vehicles.push(new bicycleFactory('Bike Company', 'Low Bike'));
vehicles.push(new carFactory('Car Factory', 'Car Model 1'));
vehicles.push(new boatFactory('Steel Boats', 'B 1000'));
vehicles.push(new blimpFactory('Blimps Corp', 'Blimp 1'));
vehicles.push(new trainFactory('Train Factory', 'Train 1'));

vehicles.forEach(vehicle => console.log(vehicle));
console.log(typeof bicycleFactory); // => returns function because it is a function
console.log(typeof vehicles[0]);    // => returns object because the returned constructor
                                    // function of createFactory creates objects
