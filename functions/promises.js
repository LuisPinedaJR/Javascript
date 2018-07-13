// callback 
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data')
    },2000)
}

getDataCallback((err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('This is the promise data')
        reject('this is my promise reject')
    }, 2000)
})

myPromise.then((data)=>{
    console.log(data)
}, (err) => {
    console.log(err)
})  
