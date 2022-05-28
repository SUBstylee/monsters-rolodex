// import { Component } from "react";

import Card from "../Card/Card.component";

import './CardList.styles.css';

// *********** functional Component

const CardList = ({ monsters }) => (
    <div className='CardList'>
        {monsters.map(monster => (
            <Card monster={monster} key={monster.id} />
        ))}
    </div>
);

// *********** class Component

// class CardList extends Component {

//     render() {
//         const { monsters } = this.props;
//         return (
//             <div className='CardList'>
//                 {monsters.map(monster => (
//                     <Card monster={monster} />
//                 ))}
//             </div>
//         );
//     };
// };

export default CardList;
