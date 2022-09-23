const { Car } = require("./car");

const Dealership = function(location, capacity, stock){
    let _location = location;
    let _capacity = capacity;
    let _stock = [];

    this.getLocation = ()=> _location;
    this.setLocation = (location)=> _location = location;
    this.getCapacity = ()=> _capacity;
    this.setCapacity = (capacity)=> _capacity = capacity;
    this.addToStock = (Car)=> _stock.push(Car);
}