let products = [];
let currentId = 0;

const addProducts= (newName, newPrice) => {
    const prodruct = {
        id: currentId,
        name: newName,
        price: newPrice
    }
    currentId ++
    prodructs.push(prodruct)
    return prodructs
}

const removeProduct = (idToRemove) => {
    const newProducts = products.filter(product => product.id != idToRemove)
    products = newProducts
    return products
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
    const prodruct = products.find(product => prodruct.id = idToFind)
    return prodruct
}