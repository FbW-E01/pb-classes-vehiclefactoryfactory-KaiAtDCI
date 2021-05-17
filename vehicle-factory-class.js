// Solution 3
"use strict"

class Factory {

    #productType;
    #localCreatedProducts;
    #localCreatedProductsCount;
    static #globalCreatedProductsCount;
    static #globalCreatedProducts;

    constructor(productType) {
        this.#productType = productType;
        this.#localCreatedProductsCount = 0;
        this.#localCreatedProducts = [];
        Factory.#globalCreatedProductsCount = [];
        Factory.#globalCreatedProducts = [];
    }

    getProductType() {
        return this.#productType;
    }

    setProductType(productType) {
        this.#productType = productType;
    }

    getProductCounter() {
        return this.#localCreatedProductsCount;
    }

    getLocalProductCounter() {
        return this.#localCreatedProductsCount;
    }

    static getGlobalProductCounter() {
        return Factory.#globalCreatedProductsCount;
    }

    getLocalCreatedProducts() {
        return this.#localCreatedProducts;
    }

    static getGlobalCreatedProducts() {
        return Factory.#globalCreatedProducts;
    }

    createProduct(make, model) {
        const localProductID = this.#localCreatedProductsCount++;
        const globalProductId = Factory.#globalCreatedProductsCount++;
        const productType = this.#productType;
        const newProduct = { productType, globalProductId, localProductID, make, model };
        this.#localCreatedProducts.push(newProduct);
        Factory.#globalCreatedProducts.push(newProduct);
        return newProduct;
    }
}

const bikeFactory = new Factory('Bike');
const carFactory = new Factory('Car');

bikeFactory.createProduct('Mosadegh Corp.', 'Model 1');
bikeFactory.createProduct('Peltonen Corp.', 'Model 2');
carFactory.createProduct('Mitsubishi', 'Colt');
bikeFactory.createProduct('Bike Company', 'Bikules 1000');


console.log(`bikeFactory produced ${bikeFactory.getLocalProductCounter()} products. See following list:`);
console.log(bikeFactory.getLocalCreatedProducts());

console.log(`carFactory produced ${bikeFactory.getLocalProductCounter()} products. See following list:`);
console.log(carFactory.getLocalCreatedProducts());

console.log(`Factories have together produced ${Factory.getGlobalProductCounter()} products. See following list:`);
console.log(Factory.getGlobalCreatedProducts());





