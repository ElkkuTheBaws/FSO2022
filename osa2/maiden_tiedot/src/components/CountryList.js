import CountryListItem from "./CountryListItem";

const CountryList = ({onChange, filter}) =>{
    return(
        filter.length <= 10 ?
            filter.map((element, index) => <CountryListItem key = {index} onClick={onChange} country={element}/>)
            :
            <p>Too many matches, specify another filter</p>
    )
}

export default CountryList