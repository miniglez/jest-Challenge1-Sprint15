let products = [{id:0, name: "patata", price:0.5}];
let currentId = 1;

const addProduct = (newName, newPrice) => {
    if(!newName || !newPrice){
        throw new Error ("Complete the values to add a product")
    }
    const index = products.findIndex(element => element.name == newName)
    if(index !== -1){
        throw new Error ("Product already exist")
    }
    const prodruct = {
        id: currentId,
        name: newName,
        price: newPrice
    }
    currentId ++
    products.push(prodruct)
    return "Successfull adding"
}

const removeProduct = (idToRemove) => {
    const index = products.findIndex(product => product.id == idToRemove)
    if(!index){
        throw new Error("ID doesn't exist")
    }
    const newProducts = products.filter(product => product.id != idToRemove)
    if(!newProducts)
    products = newProducts
    return "Successfull removal"
}

const getProducts = () => {
    return products
}

const resetproducts = () => {
    products = [];
    currentId = 0;
    return products
}

const getProduct = (idToFind) => {
    const product = products.find(element => element.id == idToFind)
    if(!product){
        throw new Error("Product doesn't exist")
    }
    return product
}

const updateProduct = (idProduct, newName, newPrice) => {
    const index = products.findIndex(element => element.id == idProduct)
    if(index === -1){
        throw new Error("Product doesn't exist")
    }
    products[index] = {
        ... products[index],
        name: newName,
        price: newPrice
    }
    return "Updating success"
}

console.log(getProduct(0))

module.exports = { resetproducts, addProduct, removeProduct, getProduct, updateProduct, getProducts }