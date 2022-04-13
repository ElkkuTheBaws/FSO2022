import { useState } from 'react'
import {useEffect} from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response =>{
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }

    useEffect(hook,[])

    const addPerson = (event) =>{
        event.preventDefault()

        const personObject ={
            name: newName,
            number: newNumber
        }

       const canAdd =  persons.filter(person => person.name === newName).length > 0 ? false : true



        console.log(canAdd)

        if(canAdd){
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
            console.log('Button pressed ', newName)
        }else{
            window.alert(`${newName} is already added to phonebook`)
            setNewName('')
            setNewNumber('')
        }

    }

    const handleNameChange = (event) =>{
      setNewName(event.target.value)
    }

    const handleNumberChange = (event) =>{
      setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
    }


    const filterNames = (list, filterName) => {
        return list.filter(per => per.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)
    }


  return (
      <div>
        <h2>Phonebook</h2>
            <Filter val={newFilter}
                    onChange={handleFilterChange}
            />
          <h2>Add new</h2>
        <PersonForm onSubmit={addPerson}
                    nameValue={newName}
                    onChangeName={handleNameChange}
                    numberValue={newNumber}
                    onChangeNumber={handleNumberChange}
                    />

        <h2>Numbers</h2>

        <Persons list={persons} filter={newFilter}/>

      </div>
  )

}

export default App