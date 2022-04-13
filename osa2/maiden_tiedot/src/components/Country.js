const Languages = ({val}) =>{
    return <li> {val}</li>
}

const Weather = ({weather, country}) =>{
    console.log(weather)
    console.log(weather.current)
    return(
        <div>
            <h2>Weather in {country.capital[0]}</h2>
            <p>Temperature {weather.current.temp_c} Celsius</p>
            <p>Wind {Math.round(weather.current.wind_kph / 3.6)} m/s</p>
        </div>
    )
}

const Country = ({country, weather}) =>{
    return(
        <>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>Languages</h2>
            {Object.values(country.languages).map((val, index) =>
                <Languages key = {index} val={val}/>
            )}
            <img src = {country.flags.png} alt = "flag" />
            {weather.current &&
                <Weather weather={weather} country={country}/>
            }
        </>
    )
}

export default Country