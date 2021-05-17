function getFactoryFunction(type) {
    return function Vehicle(make, model) {
        this.type = type;
        this.make = make;
        this.model = model;
    }
}

const bicycleFactoryFunction = getFactoryFunction('Bicycle');
const carFactoryFunction = getFactoryFunction('Car');
const boatFactoryFunction = getFactoryFunction('Boat');
const blimpFactoryFunction = getFactoryFunction('Blimp');
const trainFactoryFunction = getFactoryFunction('Train');

const vehicles = [];
vehicles.push(new bicycleFactoryFunction('Bicyle Factory', 'Model X'));
vehicles.push(new bicycleFactoryFunction('Bike Company', 'Low Bike'));
vehicles.push(new carFactoryFunction('Car Factory', 'Car Model 1'));
vehicles.push(new boatFactoryFunction('Steel Boats', 'B 1000'));
vehicles.push(new blimpFactoryFunction('Blimps Corp.', 'Blimp 1'));
vehicles.push(new trainFactoryFunction('Train Factory', 'Train 1'));

vehicles.forEach(vehicle => console.log(vehicle));
console.log(typeof bicycleFactoryFunction);  // returns function because it is a function
console.log(typeof vehicles[0]);    // returns object because the returned constructor
                                    // function of getFactoryFunction creates objects