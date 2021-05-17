// Solution 3
"use strict"

class Factory {

    // static variables
    static #globalProductsCount;
    static #globalProductList;

    // instance variables
    #productType;
    #localProductList;
    #localProductCount;

    // static methods
    static getGlobalProductCounter() {
        return Factory.#globalProductsCount;
    }
    static getGlobalCreatedProducts() {
        return Factory.#globalProductList;
    }

    // constructor(s) (in JS only 1 constructor method allowed)
    constructor(productType) {
        this.#productType = productType;
        this.#localProductCount = 0;
        this.#localProductList = [];
        Factory.#globalProductsCount = [];
        Factory.#globalProductList = [];
    }

    // getters and setters
    getProductType() {
        return this.#productType;
    }
    setProductType(productType) {
        this.#productType = productType;
    }
    getLocalProductCounter() {
        return this.#localProductCount;
    }
    getLocalCreatedProducts() {
        return this.#localProductList;
    }

    // core method(s)
    createProduct(make, model) {
        const localProductID = this.#localProductCount++;
        const globalProductId = Factory.#globalProductsCount++;
        const productType = this.#productType;
        const newProduct = { productType, globalProductId, localProductID, make, model };
        this.#localProductList.push(newProduct);
        Factory.#globalProductList.push(newProduct);
        return newProduct;
    }
}

// Test Factory-class

// create factories
const bikeFactory = new Factory('Bike');
const carFactory = new Factory('Car');

// create products
bikeFactory.createProduct('Mosadegh Corp.', 'Model 1');
carFactory.createProduct('Mitsubishi', 'Colt');
bikeFactory.createProduct('Peltonen Corp.', 'Model 2');

// show all products that have been produced in factories (bike and car)
console.log(`All factories together have produced ${Factory.getGlobalProductCounter()} products. See following list:`);
console.log(Factory.getGlobalCreatedProducts());

// show products from bikeFactory
console.log(`bikeFactory produced ${bikeFactory.getLocalProductCounter()} products. See following list:`);
console.log(bikeFactory.getLocalCreatedProducts());

// show products from carFactory
console.log(`carFactory produced ${bikeFactory.getLocalProductCounter()} products. See following list:`);
console.log(carFactory.getLocalCreatedProducts());





