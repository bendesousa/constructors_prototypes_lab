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
