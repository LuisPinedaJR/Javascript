// primitive values: string, number, boolean, null, undefined

// product --> Object.prototype --> null
const product = new Object({
    name: 'influence'

})

Object.prototype.someNewMethod = () => 'This is the new function'

// hasownproperty
console.log(product.someNewMethod())
console.log(product)
