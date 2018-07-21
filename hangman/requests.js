const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data)=>{
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch(`https://restcountries.eu/rest/v2/all`).then((response)=>{
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error('Could not fetch country')
        }
    }).then((data)=>{
        const country = data.find((country) => country.alpha2Code === countryCode) 
        return country.name
    })

}

const getLocation = () => {
    return fetch(`https://ipinfo.io/json?token=e44ad7415ea37d`).then((response)=>{
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error(`could not get location.`)
        }
    })
}