import Person from "./Person";

const filterNames = (list, filterName) => {
    return list.filter(per => per.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)
}

const Persons = ({list, filter}) =>{
    return(
        filterNames(list, filter).map((person, index) =>
            <Person key ={index} person={person}/>
        )
    )

}

export default Persons