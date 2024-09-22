const { describe } = require("node:test");
const { resetproducts, addProduct, removeProduct, getProduct, updateProduct} = require("./product.js");
const exp = require("constants");
const prueba = {
    id: 0,
    name: "Arroz",
    price: 1
}

beforeEach(() => {
    resetproducts();
})

describe("addProduct", () => {
    it("Should return success", () => {
        expect(addProduct(prueba.name, prueba.price)).toBe("Successfull adding")
    })
    beforeEach(() => {
        resetproducts();
    })
    it("Should return error", () => {
        expect(() => addProduct(1).toThrow("Complete the values to add a product"))
    })
    it("Should return error because object exist", () => {
        addProduct(prueba.name, prueba.price)
        expect(() => addProduct(prueba.name, prueba.price).toThrow("Product already exist"))
    })
    
})

beforeEach(() => {
    resetproducts();
})

describe("removeProduct", () => {
    addProduct(prueba.name, prueba.price)
    it("Should return error", () => {
        expect(() => removeProduct(1).toThrow("ID doesn't exist"))
    })
    it("Should be return success", () => {
        expect(removeProduct(0)).toBe("Successfull removal")
    })
})

beforeEach(() => {
    resetproducts();
})

describe("getProduct", () => {
    it("Should return error", () => {
        expect(() => getProduct(5).toThrow("Product doesn't exist"))
    })
    it("Should be return the object", () => {
        addProduct("patata", 0.5)
        expect(getProduct(0)).toBeTruthy()
    })
})

beforeEach(() => {
    resetproducts();
})

describe("updateProduct", () => {
    it("Should update the product", () => {
        addProduct("patata", 0.5)
        expect(updateProduct(0, "arroz", 1)).toBeTruthy()
    })
    it("Should fail when prouct doesn't exist", () => {
        expect(() => updateProduct(5, "berenjena", 40).toThrow("Product doesn't exist"))
    })
})