let products = [];
let currentId = 0;

const addProduct = (newName, newPrice) => {
    if(!newName || !newPrice){
        throw new Error ("Complete the values to add a product")
    }
    const index = products.findIndex(element => element.name == newName)
    console.log(products)
    console.log(index)
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
    const prodruct = products.find(element => element.id = idToFind)
    if(!prodruct){
        throw new Error("Product doesn't exist")
    }
    return prodruct
}

const updateProduct = (idProduct, newName, newPrice) => {
    const index = products.findIndex(element => element.id = idProduct)
    if(!index){
        throw new Error("Product doesn't exist")
    }
    products[index] = {
        ... products[index],
        name: newName,
        price: newPrice
    }
    return products
}

module.exports = { resetproducts, addProduct, removeProduct, getProduct, updateProduct, getProducts }