"use strict"
// Solution 2

function Factory(type) {
    this.type = type;
    this.productCounter = 0;
    this.createProduct = function(make, model) {
        this.productCounter++;
        return {
            make: make,
            model: model,
        }
    }
}

const bicycleFactory = new Factory('Plane');
const bicycle1 = bicycleFactory.createProduct('Bicycle Factory', 'Model 1');
const bicycle2 = bicycleFactory.createProduct('Bicycle Factory', 'Model 2');
console.log(bicycle1);
console.log(bicycle2);
console.log(bicycleFactory.productCounter);