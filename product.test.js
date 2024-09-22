const { describe } = require("node:test");
const { resetproducts, addProduct, removeProduct, getProduct, updateProduct} = require("./prodruct.js")
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
    beforeEach(() => {
        resetproducts();
    })
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

describe("getProduct", () => {
    addProduct
})