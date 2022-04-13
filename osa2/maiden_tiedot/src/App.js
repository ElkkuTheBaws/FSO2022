import {useEffect} from "react";
import {useState} from "react";
import './App.css';
import axios from "axios";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import Country from "./components/Country";

const App = () => {

    const  [countryList, setCountryList] = useState([])
    const [newFilter, setNewFilter] = useState('')
    const [currentCountry, setCurrentCountry] = useState(null)
    const [weatherData, setWeatherData] = useState([])
    const api_key = process.env.REACT_APP_API_KEY_WEATHER

  const hook = () => {
    console.log('effect')
    axios
        .get('https://restcountries.com/v3.1/all')
        .then(response =>{
          console.log('promise fulfilled')
            setCountryList(response.data)
        })
  }
    useEffect(hook,[])

  const weatherHook = () => {
      if(currentCountry !== null){
          console.log(currentCountry.capital[0])
          axios
              .get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${currentCountry.name.common}&aqi=no`)
              .then(response =>{
                  console.log(response, 'response')
                  setWeatherData(response.data)
              })
      }
  }
    useEffect(weatherHook, [currentCountry])

    const filteredCountries = countryList.filter(per => per.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)

    const handleCountryChange = (props) =>{
        console.log('country pressed')
        setCurrentCountry(props)
    }

    const handleFilterChange = (event) => {
        console.log('filter changed')
        setNewFilter(event.target.value)
        if(filteredCountries.length === 1)
            setCurrentCountry(filteredCountries[0])
    }

    useEffect(()=>{
        if(filteredCountries.length ===1){
            setCurrentCountry(filteredCountries[0])
        }
    }, [filteredCountries])

    const showCountry = (currentCountry !== null && weatherData !== []) ? true : false
  return (
      <div>
        <Filter onChange={handleFilterChange} val={newFilter} />
          {filteredCountries.length > 1 && <CountryList onChange = {handleCountryChange} filter = {filteredCountries}/> }
          {showCountry ? <Country country={currentCountry} weather = {weatherData}/> : <p>No countries to show</p>}
      </div>
  );
}

export default App;
