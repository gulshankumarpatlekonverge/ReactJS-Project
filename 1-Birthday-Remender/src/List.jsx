import React from 'react';

function List({ people }){
  
  return (
    <>
      {people.map(person => {
        const { id, name, image, age } = person;
        return(
          <article key={id} className="person">
          <img src={image} alt="profile_image" />
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
            </div>
          </article>
      )})}
    </>
  )
}

export default List;
