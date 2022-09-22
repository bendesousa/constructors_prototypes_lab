const {
    Car,
    
} = require("./car")

const testcar = new Car("Toyota", 10000, "Petrol")

describe("make", () => {
    
    test("can get car make", () => {
        expect(testcar.getMake()).toBe("Toyota")
    });

    test("can set car make", () =>{
        expect(testcar.setMake("Honda")).toBe("Honda")
    });
});

describe("price", () => {
    
    test("can get car price", () => {
        expect(testcar.getPrice()).toBe(10000)
    });

    test("can set car price", () =>{
        expect(testcar.setPrice(15000)).toBe(15000)
    });
});

describe("engineType", () => {
    
    test("can get car engineType", () => {
        expect(testcar.getEngineType()).toBe("Petrol")
    });

    test("can set car engineType", () =>{
        expect(testcar.setEngineType("Diesel")).toBe("Diesel")
    });
});
