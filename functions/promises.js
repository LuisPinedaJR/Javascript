// callback 
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if(typeof num == 'number'){
            callback(undefined, num *2)
        }else{
            callback('Number must be provided')
        }
    },2000)
}

getDataCallback((err, data) => {
    if(err){
        console.log(err)
    }else{
        getDataCallback(data, (err, data)=>{
            if(err){
                console.log('err')
            }else{
                console.log(data)
            }
        })
    }
})

// promise
const getDataPromise = (data) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(`This is the success data: ${data}`)
        // reject('this is my promise reject')
    }, 2000)
})

const myPromise = getDataPromise(123)

myPromise.then((data)=>{
    console.log(data)
}, (err) => {
    console.log(err)
})  
