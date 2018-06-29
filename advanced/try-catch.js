const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount * .25
    }else{
        throw Error('Argument must be a number') // throw error keep it short
    }
}

// try and catch is used when you dont want to stop other function or crash the system
// single out a piece of code and test it then let other functions run as well.

try{ // when things go well
    const result = getTip(10)
    console.log(result)
}catch (e){ // when things fail
    console.log('catch block is running')
}


// console.log()