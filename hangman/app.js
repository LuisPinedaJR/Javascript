// primitive values: string, number, boolean, null, undefined

// Object: myobject --> Object.prototype --> null
// Array: myarray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null

// const team = new Array(['Luke', 'Medison'])
// console.log(team.hasOwnProperty('filter'))


const product = 'Computer'
console.log(product.split(''))

const otherProduct = new String('Phone')
console.log(otherProduct)