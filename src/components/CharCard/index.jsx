import React from 'react'
import "./style.css"

const CharCard = ({results}) => {
    const final = results
    console.log(final)

  return (
    <div>
    <>
     <h1>Meus Personagens</h1>
      <div className='containerOne'>
        {final.map(card => <div className='containerTwo' key={card.id}>
          <img src={card.image} alt={card.name} />
          <span>
          Nome: {card.name}
          </span>
          <span>
          Espécie: {card.species}
          </span>
          <span>
            Status: {card.status}
          </span>
          <span>
            Episódio: {card.episode[0]}
          </span>
        </div>)}
      </div>
    </>
    </div>

  )
}

export default CharCard

// {students.map(student => <div key={student.id}>
//   Nome: {student.name} - Email: {student.email}
//  </div>)}