//Car Class
const Car = function (make, price, engineType){
    let _make = make;
    let _price = price;
    let _engineType = engineType;

    this.getMake = ()=> _make;
    this.setMake = (make)=> _make = make;
    this.getPrice = ()=> _price;
    this.setPrice = (price)=> _price = price;
    this.getEngineType = ()=> _engineType;
    this.setEngineType = (engineType)=> _engineType = engineType;
}

const car1 = new Car("Toyota", 10000, "Petrol")

