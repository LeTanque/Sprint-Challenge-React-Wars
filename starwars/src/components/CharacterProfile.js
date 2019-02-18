import React from 'react';
import Character from './Character';

const CharacterProfile = props => {
    // Character profile recieves props from App and sends state to character.js
    // Character profile returns character styled object
    return (
        // Map over the starwarsChars array and for each character, pass these values to character.js
        // and receive back the styled card
        <React.Fragment>
            
            {props.starwarsChars.map(character => (

                <Character 
                    key={character.created} 
                    // name={character.name}     
                    // height={character.height}
                    // mass={character.mass}
                    // birth_year={character.birth_year}
                    character={character}
                />
                
            ))}


        </React.Fragment>
    )
}

export default CharacterProfile;