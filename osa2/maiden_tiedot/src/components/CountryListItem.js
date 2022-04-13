const Button = ({onClick, value}) =>{
    return(
        <button onClick= {() => onClick(value)}>show</button>
    )
}

const CountryListItem = ({country, onClick}) =>{
    return(
        <div>
            <li>{country.name.common}
                <Button value={country} onClick={onClick}/>
            </li>
        </div>
    )
}

export default CountryListItem