import { useState } from 'react'

const Header = ({name}) => <div><h1>{name}</h1></div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)


const Statistics = (props) =>{

    const all = props.parts[0].count + props.parts[1].count + props.parts[2].count
    const avgdiff = props.parts[0].count - props.parts[2].count
    const avg = avgdiff/all
    const positive = (props.parts[0].count / all) * 100
    let showStats = false;
    const allParts ={
        text: 'all',
        count: all
    }

    const avarageParts ={
        text: 'avarage',
        count: avg.toFixed(1)
    }

    const positiveParts ={
        text: 'positive',
        count: (positive.toFixed(1).toString() + '%')
    }
    if(all > 0){
        showStats = true
    }

if(showStats){
    return(
        <table>
            <StatisticLine parts = {props.parts[0]}/>
            <StatisticLine parts = {props.parts[1]}/>
            <StatisticLine parts = {props.parts[2]}/>
            <StatisticLine parts = {allParts}/>
            <StatisticLine parts = {avarageParts}/>
            <StatisticLine parts = {positiveParts}/>
        </table>
    )
}else{
    return (
        <>

        </>
    )
}

}


const StatisticLine = ({parts}) =>{
return(
    <tbody>
    <tr>
        <td>{parts.text} </td>
        <td> {parts.count}</td>
    </tr>
    </tbody>

)
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

        const feedback ={
            types: [
                {
                    //0
                    text: 'good',
                    count: good
                },
                {
                    //1
                    text: 'neutral',
                    count: neutral
                },
                {
                    //2
                    text: 'bad',
                    count: bad
                }
            ]
        }


    const handleGoodClick = () => setGood(good + 1)
    const handleNeurtralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

  return (
      <div>
          <Header name = 'give feedback'/>
          <Button handleClick={handleGoodClick}
                  text='good'/>
          <Button handleClick={handleNeurtralClick}
                  text='neutral'/>
          <Button handleClick={handleBadClick}
                  text='bad'/>
          <Header name = 'statistics'/>

              <Statistics parts = {feedback.types}/>

      </div>




  )
}

export default App