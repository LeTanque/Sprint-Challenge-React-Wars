import React from 'react';


const Character = props => {

    return (
        <React.Fragment>

            <div className='character-card'>
                <h3>{props.name}</h3>
                <div className='character-stats'>
                    <p>{props.height} cm</p>
                    <p>{props.mass} kg</p>
                    <p>Born in {props.birth_year}</p>
                </div>
            </div>


        </React.Fragment>
    )
}


export default Character;