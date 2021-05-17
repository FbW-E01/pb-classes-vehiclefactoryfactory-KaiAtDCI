// Solution 3
"use strict"

class Factory {

    #productType;
    #productCounter;
    static #totalProductCounter = 0;

    constructor(productType) {
        this.#productType = productType;
        this.#productCounter = 0;
    }

    getProductType() {
        return this.#productType;
    }

    setProductType(productType) {
        this.#productType = productType;
    }

    getProductCounter() {
        return this.#productCounter;
    }

    static getTotalProductCounter() {
        return Factory.#totalProductCounter;
    }

    createProduct(make, model) {
        const productType = this.#productType;
        Factory.#totalProductCounter++;
        this.#productCounter++;
        return {
            productType, make, model
        }
    }
}

const bikeFactory = new Factory('Bike');
const carFactory = new Factory('Car');

const bike1 = bikeFactory.createProduct('Bike Corp.', 'Model 1');
const bike2 = bikeFactory.createProduct('Bike Corp.', 'Model 2');
const car = carFactory.createProduct('Mitsubishi', 'Colt');
const products = [];

products.push(bike1, bike2, car);
console.log(products);
console.log(typeof Factory);        // => function, "Seems as if this is how JS handles classes internally?!"

console.log(typeof bikeFactory);    // => object
console.log(typeof products[0]);    // => object

// Checking if getter and setter function work
console.log (bikeFactory.getProductType());
bikeFactory.setProductType('Bicycle');
console.log (bikeFactory.getProductType());

// Checking if access to private variable is prevented
// console.log(bikeFactory.productType);   // => undefined
// console.log(bikeFactory.#productType);  // => SyntaxError: Private field '#productType' must
                                           //    be declared in an enclosing class

// Check if productCounter works
console.log(bikeFactory.getProductCounter());   // => 2, correct!

// Check if static totalProductCounter works
console.log(Factory.getTotalProductCounter());  // => 3, correct! 2 bikes and one car were produced in all factories

// Check if totalProductCounter is private
// console.log(Factory.#totalProductCounter); // => SyntaxError: Private field '#totalProductCounter'
                                              // must be declared in an enclosing class








