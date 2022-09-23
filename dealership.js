const { Car } = require("./car");

const Dealership = function(location, capacity){
    let _location = location;
    let _capacity = capacity;
    let _stock = [];

    this.getLocation = ()=> _location;
    this.setLocation = (location)=> _location = location;
    this.getCapacity = ()=> _capacity;
    this.setCapacity = (capacity)=> _capacity = capacity;
    this.addToStock = (Car)=> _stock.push(Car);
    this.getStock = () => _stock;

    
    stockCount = 0;
        for (let i = 0; i < _stock.length; i++){
        stockCount++;
        }


 
};

const dealer1 = new Dealership("North", 100,);
const testcar = new Car("Toyota", 10000, "Petrol");
dealer1.addToStock(testcar);

//finding by manufacturer
const findByMake = stock.filter(stock => Car.getMake());

//find total value 
const totalValue = stock.reduce((reducer, Car.getPrice()) => {
    return reducer + Car.getPrice();
}, 0);

console.log(dealer1.getStock().map((Car) => Car.getMake()));
console.log(stockCount);
console.log(findByMake);


