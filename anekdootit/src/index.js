import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) =>
  <button onClick={onClick}>
    {text}
  </button>

const Anecdote = ({text, votesCount}) =>
  <div>
    <p>{text}</p>
    <p>{votesCount} votes</p>
  </div>

const MostWotes = ({anecdotes, votes}) => {
  const highestVoteCount = Math.max(...votes)
  const MostWotesIndex = votes.indexOf(highestVoteCount)
  const MostWotes = anecdotes[MostWotesIndex]
  if (highestVoteCount === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{MostWotes}</p>
      <p>{highestVoteCount} votes</p>
    </div>
  )
}

const Header = ({title}) => <h1>{title}</h1>

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setvotes] = useState(Array(6).fill(0))

  const handleVoteClick = () => {
    const newvotes = [...votes]
    newvotes[selected] += 1
    setvotes(newvotes)
  }

  const handleAnecdoteClick = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(arrayIndex)
  }

  return (
    <div>
      <Header title="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votesCount={votes[selected]} />
      <Button onClick={handleVoteClick} text="vote"/>
      <Button onClick={handleAnecdoteClick} text="Next anecdote"/>
      <Header title="Anecdote with most votes" />
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
