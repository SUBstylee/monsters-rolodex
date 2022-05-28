// import { Component } from "react";

import './Card.styles.css';

// *********** functional Component

const Card = ({ monster }) => {
    const { id, name, email } = monster;
    return (
        <div className='card__container Card'>
            <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

// *********** class Component

// class Card extends Component {

//     render() {
//         const { id, name, email } = this.props.monster;
//         return (
//             <div className='card__container Card' key={id}>
//                 <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     };
// };

export default Card;