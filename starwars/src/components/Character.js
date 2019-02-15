import React from 'react';


const Character = props => {
console.log(props);

    return (
        <React.Fragment>

            <h3>{props.name}</h3>
            <h3>{props.height}</h3>
            <h3>{props.mass}</h3>
            <h3>{props.birth_year}</h3>

        
        </React.Fragment>
    )
}


export default Character;