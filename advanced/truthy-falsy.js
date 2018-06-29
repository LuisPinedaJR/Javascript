const products = [{ name: 'Computer mouse'}]
const product = products[0]

// Truthy  - Values that resolve to true in boolean context 
// Truthy values = object {}, array []

// Falsy - Values that resolve to false ina boolean context
// Falsy  values  = false, 0, empty string, null, undefined, NaN

// NaN - not a number ex. 1/0

if(product){
    console.log("product found!")
}else{
    console.log("product not found.")
}