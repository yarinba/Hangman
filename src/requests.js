const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200){
        const data = await response.json()
        return data.find((c) => c.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch')
    }

}

const getLocation = async () =>{
    const response = await fetch('//ipinfo.io/json?token=d43ef742b99a46')
    if(response.status === 200){
        return response.json()
    } else{
        throw new Error('Unable to fetch')
    }
}

const getCurrentCountry = async () =>{
    const loc = await getLocation()
    return getCountry(loc.country)
    
}

export {getPuzzle as default}