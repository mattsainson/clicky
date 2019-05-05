import React from 'react';
import './Card.css';

const Card = (props) => {
        return (
            <div>
                <img key={props.key} src={props.image} className="myImg rounded float-left" alt={props.name} onClick={props.onClick} />
            </div>
                );
}
        
export default Card;