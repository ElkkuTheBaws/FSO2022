import { useState } from 'react'

const points =  new Uint8Array(7)
const copy = {...points}

const Button = ({handleClick, text}) =>{
  return(
      <button onClick={handleClick}>{text}</button>
  )
}

const getRandomInt = (min, max, current) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  let random =Math.floor(Math.random() * (max - min) + min)

  for (let i = min; i < max; i++) {
    //console.log(random, current)
    if(random != current)
      return random
    else random =Math.floor(Math.random() * (max - min) + min)
  }
}

const App = () => {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [hiehestVotes, setHighestVotes] = useState(0)
  const [hiehestIndex, setHiehestIndex] = useState(0)
  const [vote, setVoted] = useState(0)

  const RandomAnecdote = () => setSelected(getRandomInt(0, anecdotes.length, selected))
  const AddPoint = () =>{
    copy[selected] += 1
    setVoted(copy[selected])

    if(copy[selected] > hiehestVotes){
      setHiehestIndex(selected)
      setHighestVotes(copy[selected])
      console.log(hiehestVotes, copy[selected])
    }

  }

  return (
      <div>
        <Anecdote ane = {anecdotes}
                  sel = {selected}
                  />

        <Button handleClick={AddPoint}
                text={'vote'}/>

        <Button handleClick={RandomAnecdote}
                text={'next anecdote'}/>

        <Anecdote ane = {anecdotes}
                  sel = {hiehestIndex}
        />
      </div>
  )
}

const Anecdote = (props) =>{
  return(
      <div>
        <h1>Anecdote of the day</h1>
        {props.ane[props.sel]}
        <p>has {copy[props.sel]} votes</p>
      </div>
  )
}


export default App
