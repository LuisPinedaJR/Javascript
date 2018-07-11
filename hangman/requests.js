const getPuzzle =  (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange' , (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)  /// <------------------- callback pattern 1
        }else if(e.target.readyState === 4){
            callback(`An error has taken place`, undefined)
            
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}

const getPuzzleSync = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', true)
    request.send()

if(request.readyState === 4 && request.status === 200){
    const data = JSON.parse(request.responseText)
    return data.puzzle
}else if(request.readyState === 4){
    throw new Error('Things did not go well')
    }
}