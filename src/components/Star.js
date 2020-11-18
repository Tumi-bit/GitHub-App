import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar as faStarSolid } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'


function Star() {  
    return (
        <div>
            <button onClick={onStarClicked}>
                <FontAwesomeIcon icon={isStarred ? faStarSolid : faStarRegular} />
            </button> 
        </div>
        );
}

export default Star


