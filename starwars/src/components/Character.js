import React from 'react';


const Character = (props) => {
    const {name, height, mass, birth_year} = props.character;
    return (
        <React.Fragment>

            <div className='character-card'>
                <h3>{name}</h3>
                <div className='character-stats'>
                    <p><strong className='cgray italic'>Height:</strong> <span>{height} cm</span></p>
                    <p><strong className='cgray italic'>Weight:</strong> <span>{mass} kg</span></p>
                    <p><strong className='cgray italic'>Born:</strong> <span>{birth_year}</span></p>
                </div>
            </div>


        </React.Fragment>
    )
}


export default Character;