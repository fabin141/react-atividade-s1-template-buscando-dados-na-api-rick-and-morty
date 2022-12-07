import React from 'react'
import CharCard from '../CharCard'

const Characters = ({characterList}) => {

    const {results} = characterList
  return (
    <CharCard results={results}/>
  )
}

export default Characters