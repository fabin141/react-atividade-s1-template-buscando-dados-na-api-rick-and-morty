import React from 'react'
import CharCard from '../CharCard'

const Characters = ({characterList}) => {

    const {results} = characterList
    console.log(results)
  return (
    <CharCard results={results}/>
  )
}

export default Characters