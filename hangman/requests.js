const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
       
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}


const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`)
    
        if(response.status === 200){
            const data = await response.json()
            const country = data.find((country) => country.alpha2Code === countryCode) 
             return country.name
        } else {
            throw new Error('Could not fetch country')
        }
    }


const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=e44ad7415ea37d`)
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error(`could not get location.`)
        }
    }
