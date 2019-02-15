import React from 'react';


const Character = props => {

    return (
        <React.Fragment>

            <div className='character-card'>
                <h3>{props.name}</h3>
                <div className='character-stats'>
                    <p><strong className='cgray italic'>Height:</strong> <span>{props.height} cm</span></p>
                    <p><strong className='cgray italic'>Weight:</strong> <span>{props.mass} kg</span></p>
                    <p><strong className='cgray italic'>Born:</strong> <span>{props.birth_year}</span></p>
                </div>
            </div>


        </React.Fragment>
    )
}


export default Character;