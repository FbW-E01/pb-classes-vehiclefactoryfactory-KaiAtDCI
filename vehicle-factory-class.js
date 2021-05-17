// Solution 3
"use strict"

class Factory {

    #productType;

    constructor(productType) {
        this.#productType = productType;
    }
    getProductType() {
        return this.#productType;
    }
    setProductType(productType) {
        this.#productType = productType;
    }
    createProduct(make, model) {
        const productType = this.#productType;
        return {
            productType, make, model
        }
    }
}

const bikeFactory = new Factory('Bike');
const carFactory = new Factory('Car');

const products = [];
const bike1 = bikeFactory.createProduct('Bike Corp.', 'Model 1');
const bike2 = bikeFactory.createProduct('Bike Corp.', 'Model 2');
const car = carFactory.createProduct('Mitsubishi', 'Colt');

products.push(bike1, bike2, car);
console.log(products);

console.log(typeof Factory);        // => function ??? Seems as if this is how JS handles classes internally?!
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








