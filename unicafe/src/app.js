import { tab } from '@testing-library/user-event/dist/tab'
import React, { useState } from 'react'

const Button = (props) => (
  <button 
    onClick={props.handleClick}>{props.text}
  </button>
)

const StatisticsLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  const good=props.good
  const neutral=props.neutral
  const bad=props.bad
  const sumOfReviews=good+neutral+bad
  const goodPoints=good*1
  const neutralPoints=neutral*0
  const badPoints=bad*(-1)
  const totalPoints=goodPoints+neutralPoints+badPoints
  const average=totalPoints/sumOfReviews
  const positive = (good/sumOfReviews)*100 +" %"

  if (sumOfReviews == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given... Yet!</div>
      </div>
    )
  }

  else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text="Good reviews:" value={good}/>
            <StatisticsLine text="Neutral reviews:" value={neutral}/>
            <StatisticsLine text="Bad reviews:" value={bad}/>
            <StatisticsLine text="Average feedback:" value={average}/>
            <StatisticsLine text="Positive reviews:" value={positive} />
          </tbody>
        </table>
      </div> 
    )
  }
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give us feedback!</h1>
      <div>
      <Button handleClick={increaseGoodByOne} text="Good" />
      <Button handleClick={increaseNeutralByOne} text="Neutral" />
      <Button handleClick={increaseBadByOne} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
