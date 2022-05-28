import { Component } from "react";

import './SearchBox.styles.css';

// *********** functional Component

// const SearchBox = ({ className, placeholder, onChangeHandler }) => (
//     <input
//         className={`monsters__search__box ${className}`}
//         type='search'
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//     />
// );

// *********** class Component

class SearchBox extends Component {
    render() {
        return (
            <div>
                <input
                    className={`monsters__search__box ${this.props.className}`}
                    type='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        );
    };
};

export default SearchBox;