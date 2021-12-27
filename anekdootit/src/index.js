import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) =>
  <button onClick={onClick}>
    {text}
  </button>

const Anecdote = ({text, votesCount}) =>
  <div>
    <h4>{text}</h4>
    <h4>{votesCount} votes</h4>
  </div>

const MostWotes = ({anecdotes, votes}) => {
  const highestVoteCount = Math.max(...votes)
  const MostVotedIndex = votes.indexOf(highestVoteCount)
  const MostWotes = anecdotes[MostVotedIndex]
  
  if (highestVoteCount === 0) {
    return (
      <h4>No votes yet</h4>
    )
  }
  else {
    return (
      <div>
        <h4>{MostWotes}</h4>
        <h4>{highestVoteCount} votes</h4>
      </div>
    )
  }
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setvotes] = useState(Array(6).fill(0))

  const addVote = () => {
    const newvotes = [...votes]
    newvotes[selected] += 1
    setvotes(newvotes)
  }

  const NextAnecdote = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(arrayIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votesCount={votes[selected]} />
      <Button onClick={addVote} text="Vote"/>
      <Button onClick={NextAnecdote} text="Next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <MostWotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
