import React from 'react';
import Character from './Character';

const CharacterProfile = props => {

    return (
        <React.Fragment>

            <div>
                <h4>{props.starwarsChar}</h4>
                {props.starwarsChars.map(character => (

                    <Character 
                        key={character.created} 
                        name={character.name}     
                        height={character.height}
                        mass={character.mass}
                        birth_year={character.birth_year}

                    />
                    
                ))}
            </div>

        </React.Fragment>
    )
}

export default CharacterProfile;